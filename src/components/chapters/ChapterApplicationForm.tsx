"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import UsStateMap from "@/components/chapters/UsStateMap";
import { GRADE_LEVELS, US_STATES } from "@/data/us-states";

interface SubmitState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export default function ChapterApplicationForm() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  function handleStateSelect(stateName: string) {
    setSelectedState(stateName);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!selectedState) {
      setState({
        status: "error",
        message: "Please select your state on the map above.",
      });
      return;
    }

    data.set("state", selectedState);

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/chapter-applications", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setState({
          status: "error",
          message:
            json.error ??
            "We couldn't submit your application. Please try again in a moment.",
        });
        return;
      }

      setState({ status: "success" });
      form.reset();
      setSelectedState(null);
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
          Thanks for applying to start a county chapter. We&apos;ll review your
          application and respond within{" "}
          <strong>1 to 2 business days</strong>.
        </p>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <div className="space-y-12">
      <UsStateMap
        selectedState={selectedState}
        onSelect={handleStateSelect}
      />

      <div id="chapter-application-form">
      <Card className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          County Chapter Application
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Our chapters are organized by county. Select your state on the map,
          then tell us about the county where you want to launch a chapter.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
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
            <label htmlFor="chapter-company">Company</label>
            <input
              id="chapter-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="chapter-name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Full Name
              </label>
              <input
                id="chapter-name"
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
                htmlFor="chapter-email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                id="chapter-email"
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
                htmlFor="chapter-dob"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Date of Birth
              </label>
              <input
                id="chapter-dob"
                name="dateOfBirth"
                type="date"
                required
                disabled={submitting}
                className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
              />
            </div>
            <div>
              <label
                htmlFor="chapter-grade"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Grade Level
              </label>
              <select
                id="chapter-grade"
                name="gradeLevel"
                required
                disabled={submitting}
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60 bg-white"
              >
                <option value="" disabled>
                  Select grade level
                </option>
                {GRADE_LEVELS.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="chapter-state"
                className="block text-sm font-medium text-foreground mb-1"
              >
                State
              </label>
              <select
                id="chapter-state"
                name="stateSelect"
                required
                disabled={submitting}
                value={selectedState ?? ""}
                onChange={(event) => setSelectedState(event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60 bg-white"
              >
                <option value="" disabled>
                  Select state
                </option>
                {US_STATES.map((usState) => (
                  <option key={usState.abbreviation} value={usState.name}>
                    {usState.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-muted-foreground">
                You can also select your state on the map above.
              </p>
            </div>
            <div>
              <label
                htmlFor="chapter-county"
                className="block text-sm font-medium text-foreground mb-1"
              >
                County
              </label>
              <input
                id="chapter-county"
                name="county"
                type="text"
                required
                disabled={submitting}
                className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-60"
                placeholder="e.g. Fairfax County"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Chapters are county-based. Use the county where you plan to lead.
              </p>
            </div>
          </div>

          <div>
            <label
              htmlFor="chapter-why"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Why do you want to start a chapter?
            </label>
            <textarea
              id="chapter-why"
              name="why"
              rows={4}
              required
              disabled={submitting}
              className="w-full px-4 py-3 rounded-lg border border-ink-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y disabled:opacity-60"
              placeholder="Tell us about your community, your goals, and why a county chapter would matter where you live."
            />
          </div>

          <div>
            <label
              htmlFor="chapter-resume"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Resume Upload
            </label>
            <input
              id="chapter-resume"
              name="resume"
              type="file"
              required
              disabled={submitting}
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gold-100 file:text-ink-900 file:font-semibold hover:file:bg-gold-200 disabled:opacity-60"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                if (file.size > MAX_RESUME_BYTES) {
                  setState({
                    status: "error",
                    message: "Resume must be 5 MB or smaller.",
                  });
                  event.target.value = "";
                  return;
                }
                if (!ALLOWED_RESUME_TYPES.has(file.type)) {
                  setState({
                    status: "error",
                    message: "Please upload a PDF or Word document.",
                  });
                  event.target.value = "";
                }
              }}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              PDF or Word format, 5 MB max.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            We respond within 1 to 2 business days. By submitting your
            application, you agree to our{" "}
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
            {submitting ? "Submitting..." : "Submit Chapter Application"}
          </Button>
        </form>
      </Card>
      </div>
    </div>
  );
}
