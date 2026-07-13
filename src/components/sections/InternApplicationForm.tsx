"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  DEPARTMENT_INFO,
  DEPARTMENT_ORDER,
  getInternRoles,
} from "@/data/roles";

interface SubmitState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

const internRoles = getInternRoles();

function isValidInternSlug(slug: string) {
  return internRoles.some((role) => role.slug === slug);
}

function RoleSelect({
  id,
  label,
  name,
  value,
  onChange,
  disabled,
  exclude,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  exclude: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        required
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60 bg-white"
      >
        <option value="" disabled>
          Select a role
        </option>
        {DEPARTMENT_ORDER.map((department) => {
          const departmentRoles = internRoles.filter(
            (role) => role.department === department,
          );
          if (departmentRoles.length === 0) return null;

          return (
            <optgroup
              key={department}
              label={DEPARTMENT_INFO[department].title}
            >
              {departmentRoles.map((role) => (
                <option
                  key={role.slug}
                  value={role.slug}
                  disabled={exclude.includes(role.slug) && role.slug !== value}
                >
                  {role.title}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}

export default function InternApplicationForm() {
  const searchParams = useSearchParams();
  const prefillFirst = searchParams.get("first") ?? "";

  const [firstChoice, setFirstChoice] = useState(
    isValidInternSlug(prefillFirst) ? prefillFirst : "",
  );
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const choices = useMemo(
    () => [firstChoice, secondChoice, thirdChoice],
    [firstChoice, secondChoice, thirdChoice],
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const uniqueChoices = new Set(choices);
    if (choices.some((choice) => !choice)) {
      setState({
        status: "error",
        message: "Please select all three role preferences.",
      });
      return;
    }

    if (uniqueChoices.size !== 3) {
      setState({
        status: "error",
        message: "Each role preference must be different.",
      });
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      applicationType: "intern",
      roleChoices: choices,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      resume: String(data.get("resume") ?? ""),
      experience: String(data.get("experience") ?? ""),
      why: String(data.get("why") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        setState({
          status: "error",
          message:
            json.error ??
            "We couldn't submit your application. Please try again in a moment.",
        });
        return;
      }

      setState({ status: "success" });
    } catch {
      setState({
        status: "error",
        message:
          "We couldn't reach the server. Check your connection and try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="text-center py-12 px-6 bg-cream-50 border border-gold-300 rounded-xl">
        <svg
          className="w-12 h-12 text-gold-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Application Received
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thanks for applying. We&apos;ll review your preferences and respond
          within <strong>1 to 2 business days</strong>.
        </p>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="intern-company">Company</label>
        <input
          id="intern-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="rounded-xl border border-ink-100 bg-cream-50 p-5 sm:p-6 space-y-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Role preferences
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            Choose your top three internship roles in order of preference. High
            school students, college students, and recent graduates are welcome.
            We use this to place applicants in the best fit across departments.
          </p>
        </div>

        <RoleSelect
          id="intern-choice-1"
          label="First choice"
          name="choice1"
          value={firstChoice}
          onChange={setFirstChoice}
          disabled={submitting}
          exclude={[secondChoice, thirdChoice]}
        />
        <RoleSelect
          id="intern-choice-2"
          label="Second choice"
          name="choice2"
          value={secondChoice}
          onChange={setSecondChoice}
          disabled={submitting}
          exclude={[firstChoice, thirdChoice]}
        />
        <RoleSelect
          id="intern-choice-3"
          label="Third choice"
          name="choice3"
          value={thirdChoice}
          onChange={setThirdChoice}
          disabled={submitting}
          exclude={[firstChoice, secondChoice]}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="intern-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name
          </label>
          <input
            id="intern-name"
            name="name"
            type="text"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="intern-email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
          </label>
          <input
            id="intern-email"
            name="email"
            type="email"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="intern-phone"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Phone Number
          </label>
          <input
            id="intern-phone"
            name="phone"
            type="tel"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="intern-resume"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Resume Link
          </label>
          <input
            id="intern-resume"
            name="resume"
            type="url"
            required
            disabled={submitting}
            className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
            placeholder="Google Drive, Dropbox, LinkedIn"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="intern-experience"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Relevant Experience
        </label>
        <textarea
          id="intern-experience"
          name="experience"
          rows={4}
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
          placeholder="Briefly describe the experience, coursework, projects, or skills that are relevant to the roles you selected."
        />
      </div>

      <div>
        <label
          htmlFor="intern-why"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Why do you want to join The Legislative for Life Foundation?
        </label>
        <textarea
          id="intern-why"
          name="why"
          rows={4}
          required
          disabled={submitting}
          className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
          placeholder="Tell us what draws you to our work and what you hope to contribute."
        />
      </div>

      <p className="text-xs text-muted-foreground">
        We respond within 1 to 2 business days. Some internship roles include a
        signed onboarding agreement as part of getting started. By submitting
        your application, you agree to our{" "}
        <Link
          href="/privacy"
          className="text-gold-700 hover:text-gold-800 underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {state.message}
        </p>
      )}

      <Button type="submit">
        {submitting ? "Submitting..." : "Submit Intern Application"}
      </Button>
    </form>
  );
}
