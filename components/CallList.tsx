//@ts-nocheck
"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";

interface Props {
  type: "upcoming" | "ended" | "recording";
}

const CallList = ({ type }: Props) => {
  const router = useRouter();
  const { endedCalls, isLoading, recordings, upcomingCalls } = useGetCalls();
  const [recording, setRecording] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recording":
        return recording;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "recording":
        return "No Recordings";
      case "upcoming":
        return "No Upcoming Calls";
      default:
        return "";
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            icon={
              type === "ended"
                ? "/icons/previous.svg"
                : type === "upcoming"
                ? "/icons/upcoming.svg"
                : "/icons/recordings.svg"
            }
            title={
              (meeting as Call).state.custom.description.substring(0, 25) ||
              "No Description"
            }
            date={
              meeting.state.startsAt?.toLocaleString() ||
              meeting.start_time.toLocalString()
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon1={type === "recording" ? "/icons/play.svg" : undefined}
            handleClick={
              type === "recording"
                ? () => router.push(`${meeting.url}`)
                : () => router.push(`/meeting/${meeting.id}`)
            }
            buttonText={type === "recording" ? "Play" : "Start"}
            link={
              type === "recording"
                ? meeting.url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`
            }
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
