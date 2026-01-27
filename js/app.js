// Stretch images - place your images in images/stretches/ folder
// The app will look for: images/stretches/{image-id}.png
const STRETCH_IMAGE_PATH = 'images/stretches/';

// Muscle data with causes and stretches
const muscleData = {
    'neck-front': {
        name: 'Neck (Front)',
        location: 'Sternocleidomastoid & Scalenes - front and sides of neck',
        causes: [
            'Forward head posture from screen use',
            'Sleeping in awkward positions',
            'Stress and tension holding',
            'Carrying heavy bags on one shoulder',
            'Holding phone between ear and shoulder'
        ],
        stretches: [
            { name: 'Lateral Neck Stretch', duration: '30 sec each side', description: 'Sit tall, drop right ear toward right shoulder. Gently press with right hand for deeper stretch.', image: 'lateral-neck-stretch' },
            { name: 'Chin Tuck', duration: '10 reps', description: 'Sit tall, pull chin straight back creating a "double chin". Hold 5 seconds, repeat.', image: 'chin-tuck' },
            { name: 'SCM Stretch', duration: '20-30 sec each side', description: 'Turn head 45 degrees to one side, then tilt chin up. Feel stretch along front of neck.', image: 'scm-stretch' }
        ]
    },
    'trapezius': {
        name: 'Upper Trapezius',
        location: 'Large muscle from neck to shoulders and upper back',
        causes: [
            'Elevated shoulders from stress',
            'Poor ergonomic desk setup',
            'Carrying heavy shoulder bags',
            'Cold environments causing hunching',
            'Extended phone or computer use'
        ],
        stretches: [
            { name: 'Upper Trap Stretch', duration: '30 sec each side', description: 'Anchor right hand under chair. Tilt head left, bringing ear toward shoulder.', image: 'upper-trap-stretch' },
            { name: 'Shoulder Shrugs', duration: '10 reps', description: 'Raise shoulders to ears, hold 5 seconds, then release completely.', image: 'shoulder-shrugs' },
            { name: 'Levator Scapulae Stretch', duration: '30 sec each side', description: 'Look down toward armpit, gently pull head with hand.', image: 'levator-scap-stretch' }
        ]
    },

    'upper-traps': {
        name: 'Upper Traps (Left/Right)',
        location: 'Top of shoulders into the neck (upper trapezius)',
        causes: [
            'Stress-driven shoulder shrugging',
            'Desk work / laptop posture',
            'Tense arm swing while running',
            'Carrying bags on one shoulder',
            'Cold weather hunching'
        ],
        stretches: [
            { name: 'Upper Trap Stretch', duration: '30 sec each side', description: 'Anchor the hand on the painful side, gently tilt head away. Keep shoulder down.', image: 'upper-trap-stretch' },
            { name: 'Levator Scapulae Stretch', duration: '30 sec each side', description: 'Look down toward armpit, gently pull head forward/diagonal.', image: 'levator-scap-stretch' },
            { name: 'Wall Angels (Mobility)', duration: '8-10 reps', description: 'Back to wall, ribs down. Slide arms up/down to open chest and upper back.', image: 'wall-angels' }
        ]
    },
    'levator-scapulae': {
        name: 'Levator Scapulae',
        location: 'Side/back of neck to the top inner shoulder blade',
        causes: [
            'Forward head posture',
            'Running with tense shoulders',
            'Sleeping with head rotated',
            'Frequent looking down at phone',
            'Upper trap overuse'
        ],
        stretches: [
            { name: 'Levator Scapulae Stretch', duration: '30 sec each side', description: 'Turn head 45° away, then look down. Gently pull head forward.', image: 'levator-scap-stretch' },
            { name: 'Chin Tuck', duration: '10 reps', description: 'Slide chin straight back, hold 3-5 seconds. Don’t tilt head.', image: 'chin-tuck' },
            { name: 'Thread-the-Needle', duration: '30 sec each side', description: 'On all fours, reach arm under and rotate upper back/neck gently.', image: 'thread-the-needle' }
        ]
    },
    'rhomboids': {
        name: 'Rhomboids / Mid Traps',
        location: 'Between shoulder blades (posture and scapular control)',
        causes: [
            'Slouching or rounded shoulders',
            'Weak scapular stabilizers',
            'High mileage with poor arm swing mechanics',
            'Overreaching at desk',
            'Breathing shallowly (tight upper back)'
        ],
        stretches: [
            { name: 'Hands Clasped Forward', duration: '20-30 sec', description: 'Clasp hands and push palms away to spread shoulder blades.', image: 'hands-clasped-forward' },
            { name: 'Open Book Stretch', duration: '30 sec each side', description: 'Side-lying rotation to open chest and upper back.', image: 'open-book-stretch' },
            { name: 'Foam Roll Upper Back', duration: '60-90 sec', description: 'Slow rolls between shoulder blades; pause on tight spots.', image: 'thoracic-foam-roll' }
        ]
    },
    'lats': {
        name: 'Latissimus Dorsi (Lats)',
        location: 'Side of mid-back under the armpit',
        causes: [
            'Tight arm swing / reaching forward while running',
            'Pulling exercises without mobility',
            'Desk posture with shoulders internally rotated',
            'Limited thoracic extension',
            'Overhead work'
        ],
        stretches: [
            { name: 'Child’s Pose Side Reach', duration: '30 sec each side', description: 'In child’s pose, walk hands to one side to stretch opposite lat.', image: 'childs-pose-side-reach' },
            { name: 'Wall Lat Stretch', duration: '30 sec each side', description: 'Hands on wall, hinge hips back, drop chest; bias to one side.', image: 'wall-lat-stretch' },
            { name: 'Doorway Lat Stretch', duration: '30 sec each side', description: 'Hold doorway overhead, sit hips back and lean away.', image: 'doorway-lat-stretch' }
        ]
    },
    'thoracic-erectors': {
        name: 'Mid Back (Thoracic Erectors)',
        location: 'Muscles along the thoracic spine (mid-back)',
        causes: [
            'Stiff thoracic spine from sitting',
            'Shallow breathing / rib stiffness',
            'Long runs with fatigued posture',
            'Backpack/carrying loads',
            'Poor upper-back mobility'
        ],
        stretches: [
            { name: 'Thoracic Extension', duration: '30 sec per spot', description: 'Foam roller under mid-back. Support head, extend gently.', image: 'thoracic-extension' },
            { name: 'Open Book Stretch', duration: '30 sec each side', description: 'Rotate upper body open to improve thoracic mobility.', image: 'open-book-stretch' },
            { name: "Child's Pose", duration: '45-60 sec', description: 'Sink hips back and breathe into mid-back.', image: 'childs-pose' }
        ]
    },
    'ql': {
        name: 'Quadratus Lumborum (QL)',
        location: 'Side of low back above the hip (often one-sided in runners)',
        causes: [
            'Uneven stride / pelvic drop (hip weakness)',
            'Running on cambered roads',
            'Weak glute medius',
            'Tight hip flexors / poor core control',
            'Carrying kids/bags on one side'
        ],
        stretches: [
            { name: 'Standing Side Bend', duration: '30 sec each side', description: 'Reach arm overhead and bend away from the painful side.', image: 'standing-side-bend' },
            { name: "Child's Pose Side Walk", duration: '30 sec each side', description: 'From child’s pose, walk hands to one side to stretch opposite QL.', image: 'childs-pose-side-walk' },
            { name: 'Supine Twist', duration: '30-45 sec each side', description: 'Let knees fall to one side; breathe into the side of low back.', image: 'supine-twist' }
        ]
    },
    'lumbar-erectors': {
        name: 'Low Back (Lumbar Erectors)',
        location: 'Muscles along the lumbar spine',
        causes: [
            'Overstriding or leaning back while running',
            'Weak core / glutes causing lumbar compensation',
            'Tight hip flexors',
            'Prolonged sitting',
            'Poor lifting mechanics'
        ],
        stretches: [
            { name: 'Knee-to-Chest Stretch', duration: '30-45 sec', description: 'Lie on back, pull knees toward chest and breathe.', image: 'knee-to-chest' },
            { name: 'Supine Twist', duration: '30-45 sec each side', description: 'Rotate knees side to side to release low back.', image: 'supine-twist' },
            { name: 'Cat-Cow', duration: '8-10 cycles', description: 'Gentle spinal flex/extend to unload lumbar area.', image: 'cat-cow-stretch' }
        ]
    },
    'glute-medius': {
        name: 'Glute Medius (Hip Stabilizer)',
        location: 'Upper outer butt/hip (key runner stabilizer)',
        causes: [
            'High mileage with weak hip stability',
            'Excessive hip drop (Trendelenburg)',
            'Running on uneven surfaces',
            'Tight TFL/IT band',
            'Too much sitting'
        ],
        stretches: [
            { name: 'Figure-4 Stretch', duration: '30-45 sec each side', description: 'Cross ankle over opposite knee and pull in.', image: 'figure-four-stretch' },
            { name: 'Pigeon Pose', duration: '60-90 sec each side', description: 'Front shin angled, back leg long; keep hips square.', image: 'pigeon-pose' },
            { name: 'Standing Hip Hike (Activation)', duration: '10 reps each side', description: 'Stand on a step, drop and lift pelvis using the stance hip.', image: 'hip-hike' }
        ]
    },
    'it-band': {
        name: 'IT Band / TFL Region',
        location: 'Outer thigh and hip (often irritated in runners)',
        causes: [
            'Sudden increase in mileage',
            'Downhill running',
            'Weak glute medius / hip control',
            'Overstriding or narrow step width',
            'Tight TFL and hip flexors'
        ],
        stretches: [
            { name: 'Standing IT Band Stretch', duration: '30 sec each side', description: 'Cross painful-side leg behind, lean away and reach overhead.', image: 'standing-it-band-stretch' },
            { name: 'Side-Lying Quad/TFL Stretch', duration: '30 sec each side', description: 'Grab top ankle behind you; keep hip stacked.', image: 'side-lying-quad-stretch' },
            { name: 'Hip Flexor Stretch', duration: '30-45 sec each side', description: 'Kneeling lunge, tuck pelvis under; feel front/outer hip.', image: 'kneeling-hip-flexor' }
        ]
    },
    'achilles': {
        name: 'Achilles / Lower Calf',
        location: 'Tendon just above the heel',
        causes: [
            'Rapid mileage increase',
            'Hill sprints or speedwork',
            'Stiff ankles / tight calves',
            'Worn shoes or low heel drop switch',
            'Too little recovery between runs'
        ],
        stretches: [
            { name: 'Soleus Stretch', duration: '30 sec each side', description: 'Wall calf stretch with back knee bent to target lower calf/Achilles.', image: 'soleus-stretch' },
            { name: 'Step Calf Stretch', duration: '30-45 sec each side', description: 'Heel off step, lower slowly and hold. Don’t bounce.', image: 'step-calf-stretch' },
            { name: 'Eccentric Heel Drops', duration: '2 x 10 each side', description: 'Rise with both feet, lower slowly on one. Classic Achilles rehab move.', image: 'eccentric-heel-drops' }
        ]
    },
    'shoulder-front': {
        name: 'Anterior Deltoid & Chest',
        location: 'Front of shoulders and upper chest',
        causes: [
            'Rounded shoulder posture',
            'Excessive pushing exercises',
            'Desk work with arms forward',
            'Driving with arms extended',
            'Carrying items in front of body'
        ],
        stretches: [
            { name: 'Doorway Stretch', duration: '30-45 sec', description: 'Stand in doorway, place forearm on frame with elbow at 90°. Step forward.', image: 'doorway-chest-stretch' },
            { name: 'Behind Back Clasp', duration: '20-30 sec', description: 'Clasp hands behind back, straighten arms and lift slightly while opening chest.', image: 'behind-back-stretch' },
            { name: 'Wall Chest Stretch', duration: '30 sec each side', description: 'Place palm on wall at shoulder height. Turn body away until stretch is felt.', image: 'wall-chest-stretch' }
        ]
    },
    'shoulder-back': {
        name: 'Posterior Deltoid',
        location: 'Back of shoulders',
        causes: [
            'Overuse from pulling exercises',
            'Poor posture compensation',
            'Repetitive reaching movements',
            'Swimming (especially backstroke)',
            'Throwing sports'
        ],
        stretches: [
            { name: 'Cross-Body Shoulder Stretch', duration: '30 sec each side', description: 'Bring right arm across chest. Use left hand to gently pull arm closer.', image: 'cross-body-stretch' },
            { name: 'Thread the Needle', duration: '30 sec each side', description: 'Start on hands and knees. Slide right arm under body, lowering shoulder to floor.', image: 'thread-the-needle' },
            { name: 'Eagle Arms', duration: '20-30 sec each side', description: 'Cross elbows, wrap forearms, press palms together. Lift elbows.', image: 'eagle-arms' }
        ]
    },
    'chest': {
        name: 'Pectorals',
        location: 'Chest muscles (pectoralis major & minor)',
        causes: [
            'Hunched posture at desk',
            'Excessive bench pressing',
            'Rounded shoulders from phone use',
            'Sleeping on stomach or side',
            'Anxiety and protective posturing'
        ],
        stretches: [
            { name: 'Corner Stretch', duration: '30-45 sec', description: 'Place both forearms on corner walls. Lean forward until stretch is felt across chest.', image: 'corner-stretch' },
            { name: 'Floor Angels', duration: '10-15 reps', description: 'Lie on back with knees bent. Make snow angel motions keeping arms on floor.', image: 'floor-angels' },
            { name: 'Foam Roller Chest Opener', duration: '1-2 min', description: 'Lie lengthwise on foam roller, arms out to sides with palms up.', image: 'foam-roller-chest' }
        ]
    },
    'biceps': {
        name: 'Biceps',
        location: 'Front of upper arm',
        causes: [
            'Repetitive lifting and carrying',
            'Excessive curling exercises',
            'Prolonged elbow flexion at desk',
            'Gripping activities (climbing, tennis)',
            'Sleeping with arms bent tightly'
        ],
        stretches: [
            { name: 'Wall Bicep Stretch', duration: '30 sec each arm', description: 'Place palm on wall behind you, fingers pointing down. Turn body away.', image: 'wall-bicep-stretch' },
            { name: 'Seated Bicep Stretch', duration: '20-30 sec', description: 'Sit with knees bent, hands on floor behind you, fingers pointing back. Slide hips forward.', image: 'seated-bicep-stretch' },
            { name: 'Doorway Bicep Stretch', duration: '30 sec each arm', description: 'Grip doorframe at shoulder height, arm straight. Rotate body away.', image: 'doorway-bicep-stretch' }
        ]
    },
    'triceps': {
        name: 'Triceps',
        location: 'Back of upper arm',
        causes: [
            'Repetitive pushing movements',
            'Excessive dips or push-ups',
            'Extended computer mouse use',
            'Throwing activities',
            'Prolonged arm extension'
        ],
        stretches: [
            { name: 'Overhead Tricep Stretch', duration: '30 sec each arm', description: 'Raise arm, bend elbow so hand reaches toward upper back. Push elbow back.', image: 'overhead-tricep-stretch' },
            { name: 'Wall Tricep Stretch', duration: '30 sec each arm', description: 'Face wall, place elbow and forearm on wall above head. Lean in.', image: 'wall-tricep-stretch' },
            { name: 'Towel Tricep Stretch', duration: '20-30 sec each side', description: 'Hold towel overhead, reach behind back with other hand to grab towel.', image: 'towel-tricep-stretch' }
        ]
    },
    'forearms': {
        name: 'Forearms',
        location: 'Forearm flexors and extensors',
        causes: [
            'Typing and mouse use (RSI)',
            'Gripping activities (golf, tennis)',
            'Manual labor and tool use',
            'Playing musical instruments',
            'Gaming with controller or keyboard'
        ],
        stretches: [
            { name: 'Wrist Flexor Stretch', duration: '30 sec each arm', description: 'Extend arm forward, palm up. Pull fingers toward floor.', image: 'wrist-flexor-stretch' },
            { name: 'Wrist Extensor Stretch', duration: '30 sec each arm', description: 'Extend arm forward, palm down. Pull fingers toward body.', image: 'wrist-extensor-stretch' },
            { name: 'Prayer Stretch', duration: '30 sec', description: 'Press palms together in front of chest. Lower hands while keeping palms together.', image: 'prayer-stretch' }
        ]
    },
    'abdominals': {
        name: 'Abdominals',
        location: 'Rectus abdominis, obliques, and core muscles',
        causes: [
            'Intense core workouts',
            'Chronic sitting causing tightness',
            'Poor posture and forward lean',
            'Stress and breath holding',
            'Digestive issues causing guarding'
        ],
        stretches: [
            { name: 'Cobra Pose', duration: '20-30 sec', description: 'Lie face down, hands under shoulders. Press up, lifting chest while keeping hips on floor.', image: 'cobra-pose' },
            { name: 'Cat-Cow Stretch', duration: '10 cycles', description: 'On hands and knees, alternate between arching back up (cat) and dropping belly (cow).', image: 'cat-cow-stretch' },
            { name: 'Standing Side Bend', duration: '20 sec each side', description: 'Stand tall, reach arm overhead and bend to opposite side.', image: 'standing-side-bend' }
        ]
    },
    'hip-flexors': {
        name: 'Hip Flexors',
        location: 'Iliopsoas and rectus femoris - front of hip',
        causes: [
            'Prolonged sitting (major cause)',
            'Cycling and running',
            'Sleeping in fetal position',
            'Excessive ab exercises',
            'Weak glutes causing compensation'
        ],
        stretches: [
            { name: 'Kneeling Hip Flexor Stretch', duration: '30-45 sec each side', description: 'Kneel on one knee, other foot forward. Tuck pelvis under and shift weight forward.', image: 'kneeling-hip-flexor' },
            { name: 'Couch Stretch', duration: '1-2 min each side', description: 'Kneel facing away from couch, place back foot on cushion. Keep torso upright.', image: 'couch-stretch' },
            { name: 'Low Lunge', duration: '30-45 sec each side', description: 'From lunge position, drop back knee to floor. Sink hips forward and down.', image: 'low-lunge' }
        ]
    },
    'quadriceps': {
        name: 'Quadriceps',
        location: 'Front of thigh (four muscles)',
        causes: [
            'Running and jumping activities',
            'Cycling (especially hills)',
            'Squatting and lunging exercises',
            'Standing for long periods',
            'Climbing stairs frequently'
        ],
        stretches: [
            { name: 'Standing Quad Stretch', duration: '30 sec each leg', description: 'Stand on one leg, pull other heel toward glute. Keep knees together.', image: 'standing-quad-stretch' },
            { name: 'Prone Quad Stretch', duration: '30-45 sec each leg', description: 'Lie face down, bend knee and grab ankle. Pull heel toward glute.', image: 'prone-quad-stretch' },
            { name: 'Kneeling Quad Stretch', duration: '30 sec each leg', description: 'In lunge position, grab back foot and pull toward glute.', image: 'kneeling-quad-stretch' }
        ]
    },
    'shins': {
        name: 'Tibialis Anterior',
        location: 'Front of lower leg (shin)',
        causes: [
            'Running on hard surfaces',
            'Walking long distances',
            'Sudden increase in activity',
            'Improper footwear',
            'Tight calf muscles'
        ],
        stretches: [
            { name: 'Kneeling Shin Stretch', duration: '30 sec', description: 'Kneel with tops of feet flat on floor, toes pointing back. Sit back on heels.', image: 'kneeling-shin-stretch' },
            { name: 'Toe Drag Stretch', duration: '20 sec each side', description: 'Stand and place top of one foot on floor behind you. Press down gently.', image: 'toe-drag-stretch' },
            { name: 'Heel Walking', duration: '30 sec', description: 'Walk on heels with toes pointed up.', image: 'heel-walking' }
        ]
    },
    'upper-back': {
        name: 'Upper Back',
        location: 'Rhomboids and middle trapezius between shoulder blades',
        causes: [
            'Rounded shoulder posture',
            'Reaching forward at desk',
            'Weak upper back muscles',
            'Heavy backpack use',
            'Slouching while sitting'
        ],
        stretches: [
            { name: 'Cat Stretch', duration: '20 sec', description: 'On hands and knees, round back toward ceiling while tucking chin.', image: 'cat-stretch' },
            { name: 'Seated Twist', duration: '30 sec each side', description: 'Sit tall, cross right leg over left. Twist torso using elbow against knee.', image: 'seated-twist' },
            { name: 'Hands Clasped Forward', duration: '20-30 sec', description: 'Clasp hands in front, push palms away while rounding upper back.', image: 'hands-clasped-forward' }
        ]
    },
    'mid-back': {
        name: 'Mid Back',
        location: 'Thoracic spine region',
        causes: [
            'Prolonged sitting',
            'Poor desk ergonomics',
            'Lack of thoracic mobility',
            'Sleeping in poor positions',
            'Stress and shallow breathing'
        ],
        stretches: [
            { name: 'Thoracic Extension', duration: '30 sec per spot', description: 'Place foam roller under mid-back. Support head, extend over roller.', image: 'thoracic-extension' },
            { name: 'Open Book Stretch', duration: '30 sec each side', description: 'Lie on side with knees bent. Rotate top arm and upper body to open.', image: 'open-book-stretch' },
            { name: 'Child\'s Pose', duration: '30-45 sec', description: 'Kneel and sit back on heels, stretch arms forward on floor.', image: 'childs-pose' }
        ]
    },
    'lower-back': {
        name: 'Lower Back',
        location: 'Erector spinae and quadratus lumborum',
        causes: [
            'Prolonged sitting (major cause)',
            'Poor lifting mechanics',
            'Weak core muscles',
            'Tight hip flexors',
            'Standing with swayback posture'
        ],
        stretches: [
            { name: 'Knee-to-Chest Stretch', duration: '30-45 sec', description: 'Lie on back, pull one or both knees toward chest.', image: 'knee-to-chest' },
            { name: 'Child\'s Pose', duration: '1-2 min', description: 'Kneel and sit back on heels, fold forward with arms extended.', image: 'childs-pose' },
            { name: 'Supine Twist', duration: '30-45 sec each side', description: 'Lie on back, bring knees to chest then let them fall to one side.', image: 'supine-twist' }
        ]
    },
    'glutes': {
        name: 'Gluteal Muscles',
        location: 'Gluteus maximus, medius, and minimus',
        causes: [
            'Prolonged sitting',
            'Running and climbing',
            'Squatting and lunging',
            'Standing on one leg repeatedly',
            'Weak hip stabilizers'
        ],
        stretches: [
            { name: 'Pigeon Pose', duration: '1-2 min each side', description: 'From hands and knees, bring right knee forward behind right wrist. Extend left leg back.', image: 'pigeon-pose' },
            { name: 'Figure-4 Stretch', duration: '30-45 sec each side', description: 'Lie on back, cross right ankle over left knee. Pull left thigh toward chest.', image: 'figure-four-stretch' },
            { name: 'Seated Piriformis Stretch', duration: '30 sec each side', description: 'Sit in chair, cross ankle over opposite knee. Lean forward.', image: 'seated-piriformis-stretch' }
        ]
    },
    'hamstrings': {
        name: 'Hamstrings',
        location: 'Back of thigh (three muscles)',
        causes: [
            'Prolonged sitting',
            'Running and sprinting',
            'Weak glutes causing compensation',
            'Forward bending activities',
            'Cycling'
        ],
        stretches: [
            { name: 'Standing Hamstring Stretch', duration: '30-45 sec each leg', description: 'Place heel on low surface, keep leg straight. Hinge forward at hips.', image: 'standing-hamstring-stretch' },
            { name: 'Lying Hamstring Stretch', duration: '30-45 sec each leg', description: 'Lie on back, raise one leg and hold behind thigh.', image: 'lying-hamstring-stretch' },
            { name: 'Seated Forward Fold', duration: '30-45 sec', description: 'Sit with legs extended, hinge forward reaching toward toes.', image: 'seated-forward-fold' }
        ]
    },
    'calves': {
        name: 'Calves',
        location: 'Gastrocnemius and soleus - back of lower leg',
        causes: [
            'Running and jumping',
            'Wearing high heels',
            'Standing for long periods',
            'Tight ankle mobility',
            'Dehydration'
        ],
        stretches: [
            { name: 'Wall Calf Stretch', duration: '30 sec each leg', description: 'Face wall, step one foot back, keep heel down and leg straight. Lean into wall.', image: 'wall-calf-stretch' },
            { name: 'Soleus Stretch', duration: '30 sec each leg', description: 'Same as wall calf stretch but bend back knee slightly.', image: 'soleus-stretch' },
            { name: 'Step Stretch', duration: '30-45 sec each leg', description: 'Stand on step with heel hanging off edge. Let heel drop below step.', image: 'step-calf-stretch' }
        ]
    }
};

// State
let currentView = 'front';
let selectedMuscle = null;

// DOM Elements (assigned on init)
let frontBtn, backBtn, frontView, backView, infoPanel;

/**
 * Initialize UI bindings once DOM is ready.
 * Uses event delegation so SVG polygons always work.
 */
function initUI() {
    frontBtn = document.getElementById('frontBtn');
    backBtn = document.getElementById('backBtn');
    frontView = document.getElementById('frontView');
    backView = document.getElementById('backView');
    infoPanel = document.getElementById('infoPanel');

    if (!frontBtn || !backBtn || !frontView || !backView || !infoPanel) {
        console.error('Stretch Helper init failed: missing required DOM elements.');
        return;
    }

    // Toggle between front and back view
    frontBtn.addEventListener('click', () => {
        if (currentView !== 'front') {
            currentView = 'front';
            frontBtn.classList.add('active');
            backBtn.classList.remove('active');
            frontView.classList.remove('hidden');
            backView.classList.add('hidden');
            clearSelection();
            resetInfoPanel();
        }
    });

    backBtn.addEventListener('click', () => {
        if (currentView !== 'back') {
            currentView = 'back';
            backBtn.classList.add('active');
            frontBtn.classList.remove('active');
            backView.classList.remove('hidden');
            frontView.classList.add('hidden');
            clearSelection();
            resetInfoPanel();
        }
    });

    // Make SVG regions keyboard-focusable (optional)
    document.querySelectorAll('.muscle-group').forEach(el => {
        if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
        if (!el.getAttribute('role')) el.setAttribute('role', 'button');
        if (!el.getAttribute('aria-label') && el.dataset?.muscle) {
            el.setAttribute('aria-label', el.dataset.muscle);
        }
    });

    // Global delegated handlers for SVG regions
    document.addEventListener('click', handleMuscleClick);
    document.addEventListener('keydown', (e) => {
        const isActivationKey = (e.key === 'Enter' || e.key === ' ');
        if (!isActivationKey) return;
        const target = e.target && e.target.closest ? e.target.closest('.muscle-group') : null;
        if (!target) return;
        e.preventDefault();
        handleMuscleClick({ target });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
} else {
    initUI();
}


function clearSelection() {
    document.querySelectorAll('.muscle-group.selected').forEach(el => {
        el.classList.remove('selected');
    });
    selectedMuscle = null;
}

// Show empty panel state
function showEmptyPanel() {
    infoPanel.innerHTML = `
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
        </svg>
        <p>Click on any muscle group to see common causes of tension and recommended stretches.</p>
    `;
    infoPanel.classList.add('empty');
}

// Get stretch image HTML - uses local image or placeholder
function getStretchImageHTML(imageId, stretchName) {
    const imagePath = `${STRETCH_IMAGE_PATH}${imageId}.png`;

    return `
        <img src="${imagePath}"
             alt="${stretchName}"
             onerror="this.parentElement.innerHTML='<div class=\\'stretch-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'m21 15-5-5L5 21\\'/></svg><span>${imageId}.png</span></div>'">
    `;
}

// Display muscle information
function showMuscleInfo(muscleId) {
    const data = muscleData[muscleId];
    if (!data) return;

    infoPanel.classList.remove('empty');

    const stretchesHTML = data.stretches.map(s => `
        <div class="stretch-card">
            <div class="stretch-image">
                ${getStretchImageHTML(s.image, s.name)}
            </div>
            <div class="stretch-content">
                <h4>${s.name}</h4>
                <p>${s.description}</p>
                <span class="stretch-duration">${s.duration}</span>
            </div>
        </div>
    `).join('');

    const causesHTML = data.causes.map(c => `<div class="cause-item">${c}</div>`).join('');

    infoPanel.innerHTML = `
        <div class="muscle-header">
            <div class="muscle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                    <line x1="16" y1="8" x2="2" y2="22"/>
                    <line x1="17.5" y1="15" x2="9" y2="15"/>
                </svg>
            </div>
            <div class="muscle-title">
                <h2>${data.name}</h2>
                <p class="location">${data.location}</p>
            </div>
        </div>

        <div class="info-section">
            <h3>
                <span class="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                </span>
                Common Causes of Tension
            </h3>
            <div class="causes-list">${causesHTML}</div>
        </div>

        <div class="info-section">
            <h3>
                <span class="icon stretch-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                </span>
                Recommended Stretches
            </h3>
            <div class="stretches-grid">${stretchesHTML}</div>
        </div>
    `;
}

// Handle muscle clicks
function handleMuscleClick(e) {
    const muscleGroup = e.target.closest('.muscle-group');
    if (!muscleGroup) return;

    const muscleId = muscleGroup.dataset.muscle;

    // Clear previous selection
    clearSelection();

    // Select all muscle groups with same data-muscle value
    document.querySelectorAll(`[data-muscle="${muscleId}"]`).forEach(el => {
        el.classList.add('selected');
    });
    selectedMuscle = muscleId;

    // Show info
    showMuscleInfo(muscleId);
}

// Add click handlers to both views
frontView.addEventListener('click', handleMuscleClick);
backView.addEventListener('click', handleMuscleClick);
