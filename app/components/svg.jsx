import Image from "next/image";

export function PlaywrightSVG({size}) {
  return <Image src="/playwright-logo.svg" alt="playwrightIcon" width={size ||20} height={size||20} />;
}
