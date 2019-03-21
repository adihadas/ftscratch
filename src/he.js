module.exports = {
    blocks: {
        setMotor: '[M] קבע מהירות מנוע [N]',
        stopMotors: 'עצור מנועים',
        move: 'סע מרחק [N]',
        moveWithSpeed: 'סע מרחק [N] במהירות [S]',
        moveWithTime: 'סע מרחק [N] במשך [S] שניות',
        turn: 'פנה [N]',
        turnWithSpeed: 'פנה [N] במהירות [S]',
        turnWithTime: 'פנה [N] במשך [S] שניות',
        arc: 'סע בקשת של עיגול שרדיוסו [R] בכיוון [A]',
        setOdomoter: 'קבע כיוון מד מרחק [N] x: [O] y: [P]',
        leds: 'הדלק אורות לד [L] אדום [R] ירוק: [G] כחול: [B]',
        setLeds: 'קבע אור לד [L] לאפקט צבע [C]',
        changeLeds: 'שנה אפקט צבע אור [L] ב [C]',
        clearLeds: 'כבה אורות לד',
        nextDial: 'הדלק נורת חוגה הבאה בכיוון [L]',
        ledsCircle: 'הדלק נורות חוגה [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'הדלק נורות לד של חיישני קרבה אופקיים [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'הדלק נורות לד של חיישני רצפה LEDs [A] [B]',
        ledsButtons: 'הדלק נורות לד של חיישני כפתורי המגע [A] [B] [C] [D]',
        ledsTemperature: 'הדלק נורות לד של חיישן הטמפרטורה [A] [B]',
        ledsRc: 'הדלק נורות לד של חיישן השלט-רחוק [A]',
        ledsSound: 'הדלק נורות לד של המיקרופון [A]',
        soundSystem: 'נגן צליל [S]',
        soundFreq: 'נגן תו בתדר [N]Hz במשך [S] שניות',
        soundPlaySd: 'נגן צליל מכרטיס הזיכרון [N]',
        soundRecord: 'הקלט צליל [N]',
        soundReplay: 'השמע צליל מוקלט [N]',
        whenButton: 'בלחיצת כפתור [B]',
        touching: 'כאשר זוהה מכשול [S]',
        notouching: 'כאשר לא זוהה מכשול [S]',
        touchingThreshold: 'כאשר זוהה מכשול [S] [N]',
        bump: 'כאשר זוהתה טפיחה',
        soundDetected: 'כאשר זוהה קול',
        valButton: 'כפתור [B]',
        proximity: 'חיישן קרבה אופקי [N]',
        proxHorizontal: 'הצג כל חיישני הקרבה האופקיים',
        ground: 'חיישן רצפה [N]',
        proxGroundDelta: 'הצג את כל חיישני הרצפה',
        distance: 'מרחק [S]',
        angle: 'זווית [S]',
        tilt: 'זווית הטיה [T]',
        micIntensity: 'אחזר רמת ווליום',
        odometer: 'אחזר ערך מד מרחק [O]',
        motor: 'אחזר מהירות מנוע [M]'
    },
    menus: {
        leftrightall: {
            left: 'שמאל',
            right: 'ימין',
            all: 'הכל'
        },
        leftright: {
            left: 'שמאל',
            right: 'ימין'
        },
        sensors: {
            front: 'קדימה',
            back: 'אחורה',
            ground: 'רצפה'
        },
        sensors2: {
            left: 'שמאל',
            front: 'קדימה',
            right: 'ימין',
            back: 'אחורה',
            ground: 'רצפה'
        },
        proxsensors: {
            front_far_left: 'קדימה-שמאל-קיצוני',
            front_left: 'קדימה-שמאל',
            front_center: 'קדימה-מרכז',
            front_right: 'קדימה-ימין',
            front_far_right: 'קדימה-ימין-קיצוני',
            back_left: 'אחורה-שמאל',
            back_right: 'אחורה-ימין'
        },
        light: {
            all: 'הכל',
            top: 'למעלה',
            bottom: 'למטה',
            bottom_left: 'למטה-שמאל',
            bottom_right: 'למטה-ימין'
        },
        angles: {
            front: 'קדימה',
            back: 'אחורה',
            ground: 'רצפה'
        },
        odo: {
            direction: 'כיוון',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'קדימה-אחורה',
            top_bottom: 'מעלה-מטה',
            left_right: 'שמאלה-ימינה'
        },
        buttons: {
            center: 'מרכז',
            front: 'קדימה',
            back: 'אחורה',
            left: 'שמאל',
            right: 'ימין'
        },
        nearfar: {
            near: 'קרוב',
            far: 'רחוק'
        }
    }
};
