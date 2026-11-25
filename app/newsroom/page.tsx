import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Read confirmed Nolf announcements and news. No newsroom materials have been provided in this starter.",
};

export default function NewsroomPage() {
  return (
    <PageIntro
      eyebrow="Newsroom"
      title="News, when there is something to share."
      summary="A home for confirmed Nolf announcements and updates."
    >
      <div className="max-w-3xl border-l border-line pl-5 sm:pl-7">
        <p className="eyebrow">Newsroom status</p>
        <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
          No newsroom materials have been provided for this website starter. No announcements or press contacts are listed here.
        </p>
      </div>
    </PageIntro>
  );
}
