"use client"
import React, { useState, useEffect } from 'react';
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";
import { Loader2 } from 'lucide-react';

interface Props {
    type: "upcoming";
}

const Upcoming: React.FC<Props> = ({ type }) => {
    const { upcomingCalls } = useGetCalls();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        setTimeout(() => {
            setLoading(false); 
        }, 2000);
    }, []); 

    const getUpcomingMeetingTime = (): string | undefined => {
        if (type === "upcoming" && upcomingCalls.length > 0) {
            const upcomingCall: Call = upcomingCalls[0]; 
            const startsAt = upcomingCall.state.startsAt;
            if (startsAt) {
                return startsAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        }
        return undefined;
    };

    const upcomingMeetingTime = getUpcomingMeetingTime();

    return (
        <div>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Loader2 className='animate-spin w-4 mr-2' />
                    <p>Loading...</p>
                </div>
            ) : upcomingMeetingTime ? (
                <h2>Upcoming call at {upcomingMeetingTime}</h2>
            ) : (
                <h2>No Upcoming meetings</h2>
            )}
        </div>
    );
}

export default Upcoming;
