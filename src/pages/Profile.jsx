import React, { useState } from 'react'
import WhatBrings from '../components/WhatBrings'
import AvatarAndLocation from '../components/AvatarAndLocation'

const Profile = ({ setSignIn }) => {
    const [whatBrings, setWhatBrings] = useState(false);

    const handleNext = () => {
        setWhatBrings(true);
        setSignIn();
    }

    return (
        <>
            {!whatBrings ? (
                <AvatarAndLocation showNext={handleNext}/>
            ) : (
                <WhatBrings />
            )
            }
        </>
    )
}

export default Profile