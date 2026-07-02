declare module "@svg-maps/usa" {
  interface UsaMapLocation {
    id: string;
    name: string;
    path: string;
  }

  interface UsaMap {
    label: string;
    viewBox: string;
    locations: UsaMapLocation[];
  }

  const usaMap: UsaMap;
  export default usaMap;
}
