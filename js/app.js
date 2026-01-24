// Stretch image URLs from spotebi.com and other sources
const stretchImageUrls = {
    // Neck
    'lateral-neck': 'images/neck-stretch.jpg',
    'chin-tuck': 'images/neck-stretch.jpg',
    'scm-stretch': 'images/neck-stretch.jpg',
    'upper-trap': 'images/neck-stretch.jpg',
    'neck-rotation': 'images/neck-stretch.jpg',
    'suboccipital': 'images/neck-stretch.jpg',

    // Shoulders
    'doorway-stretch': 'images/chest-stretch.jpg',
    'behind-back': 'images/chest-stretch.jpg',
    'wall-chest': 'images/chest-stretch.jpg',
    'cross-body': 'images/shoulder-stretch.jpg',
    'thread-needle': 'images/upper-back-stretch.jpg',
    'eagle-arms': 'images/shoulder-stretch.jpg',

    // Chest
    'corner-stretch': 'images/chest-stretch.jpg',
    'floor-angels': 'images/floor-angels.jpg',
    'foam-roller-chest': 'images/foam-roller-chest.jpg',

    // Arms
    'wall-bicep': 'images/biceps-stretch.jpg',
    'seated-bicep': 'images/biceps-stretch.jpg',
    'doorway-bicep': 'images/biceps-stretch.jpg',
    'overhead-tricep': 'images/triceps-stretch.jpg',
    'wall-tricep': 'images/triceps-stretch.jpg',
    'towel-tricep': 'images/triceps-stretch.jpg',

    // Forearms
    'wrist-flexor': 'images/wrist-stretch.jpg',
    'wrist-extensor': 'images/wrist-stretch.jpg',
    'prayer-stretch': 'images/wrist-stretch.jpg',

    // Core
    'cobra-pose': 'images/cobra-stretch.jpg',
    'cat-cow': 'images/cat-stretch.jpg',
    'side-bend': 'images/side-bend.jpg',

    // Hips
    'kneeling-hip-flexor': 'images/hip-flexor-stretch.jpg',
    'couch-stretch': 'images/hip-flexor-stretch.jpg',
    'low-lunge': 'images/low-lunge.jpg',

    // Legs - Quads
    'standing-quad': 'images/quad-stretch.jpg',
    'prone-quad': 'images/quad-stretch.jpg',
    'kneeling-quad': 'images/quad-stretch.jpg',

    // Glutes
    'pigeon-pose': 'images/pigeon-pose.jpg',
    'figure-four': 'images/glute-stretch.jpg',
    'seated-piriformis': 'images/seated-piriformis.jpg',

    // Hamstrings
    'standing-hamstring': 'images/hamstring-stretch.jpg',
    'lying-hamstring': 'images/hamstring-stretch.jpg',
    'forward-fold': 'images/hamstring-stretch.jpg',

    // Calves
    'wall-calf': 'images/calf-stretch.jpg',
    'soleus-stretch': 'images/calf-stretch.jpg',
    'step-stretch': 'images/calf-stretch.jpg',

    // Back
    'cat-stretch': 'images/cat-stretch.jpg',
    'seated-twist': 'images/seated-twist.jpg',
    'hands-forward': 'images/upper-back-stretch.jpg',
    'thoracic-extension': 'images/upper-back-stretch.jpg',
    'open-book': 'images/upper-back-stretch.jpg',
    'childs-pose': 'images/childs-pose.jpg',

    // Lower back
    'knee-to-chest': 'images/knee-to-chest.jpg',
    'supine-twist': 'images/supine-twist.jpg',

    // Shins
    'kneeling-shin': 'images/calf-stretch.jpg',
    'toe-drag': 'images/calf-stretch.jpg',
    'heel-walk': 'images/calf-stretch.jpg',

    // Levator scapulae
    'levator-scap': 'images/neck-stretch.jpg',
    'shoulder-shrugs': 'images/shoulder-stretch.jpg'
};

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
            {
                name: 'Lateral Neck Stretch',
                duration: '30 sec each side',
                description: 'Sit tall, drop right ear toward right shoulder. Gently press with right hand for deeper stretch.',
                image: 'lateral-neck'
            },
            {
                name: 'Chin Tuck',
                duration: '10 reps',
                description: 'Sit tall, pull chin straight back creating a "double chin". Hold 5 seconds, repeat.',
                image: 'chin-tuck'
            },
            {
                name: 'SCM Stretch',
                duration: '20-30 sec each side',
                description: 'Turn head 45 degrees to one side, then tilt chin up. Feel stretch along front of neck.',
                image: 'scm-stretch'
            }
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
            {
                name: 'Upper Trap Stretch',
                duration: '30 sec each side',
                description: 'Anchor right hand under chair. Tilt head left, bringing ear toward shoulder. Add gentle pressure with left hand.',
                image: 'upper-trap'
            },
            {
                name: 'Shoulder Shrugs',
                duration: '10 reps',
                description: 'Raise shoulders to ears, hold 5 seconds, then release completely. Helps release chronic tension.',
                image: 'shoulder-shrugs'
            },
            {
                name: 'Levator Scapulae Stretch',
                duration: '30 sec each side',
                description: 'Look down toward armpit, gently pull head with hand. Targets the muscle connecting neck to shoulder blade.',
                image: 'levator-scap'
            }
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
            {
                name: 'Doorway Stretch',
                duration: '30-45 sec',
                description: 'Stand in doorway, place forearm on frame with elbow at 90°. Step forward until you feel stretch in front of shoulder.',
                image: 'doorway-stretch'
            },
            {
                name: 'Behind Back Clasp',
                duration: '20-30 sec',
                description: 'Clasp hands behind back, straighten arms and lift slightly while opening chest.',
                image: 'behind-back'
            },
            {
                name: 'Wall Chest Stretch',
                duration: '30 sec each side',
                description: 'Place palm on wall at shoulder height. Turn body away from wall until stretch is felt across chest.',
                image: 'wall-chest'
            }
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
            {
                name: 'Cross-Body Shoulder Stretch',
                duration: '30 sec each side',
                description: 'Bring right arm across chest. Use left hand to gently pull arm closer to body.',
                image: 'cross-body'
            },
            {
                name: 'Thread the Needle',
                duration: '30 sec each side',
                description: 'Start on hands and knees. Slide right arm under body, lowering shoulder to floor.',
                image: 'thread-needle'
            },
            {
                name: 'Eagle Arms',
                duration: '20-30 sec each side',
                description: 'Cross elbows, wrap forearms, press palms together. Lift elbows while keeping shoulders down.',
                image: 'eagle-arms'
            }
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
            {
                name: 'Corner Stretch',
                duration: '30-45 sec',
                description: 'Place both forearms on corner walls. Lean forward until stretch is felt across chest.',
                image: 'corner-stretch'
            },
            {
                name: 'Floor Angels',
                duration: '10-15 reps',
                description: 'Lie on back with knees bent. Make snow angel motions keeping arms in contact with floor.',
                image: 'floor-angels'
            },
            {
                name: 'Foam Roller Chest Opener',
                duration: '1-2 min',
                description: 'Lie lengthwise on foam roller, arms out to sides with palms up. Let arms fall toward floor.',
                image: 'foam-roller-chest'
            }
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
            {
                name: 'Wall Bicep Stretch',
                duration: '30 sec each arm',
                description: 'Place palm on wall behind you, fingers pointing down. Slowly turn body away from wall.',
                image: 'wall-bicep'
            },
            {
                name: 'Seated Bicep Stretch',
                duration: '20-30 sec',
                description: 'Sit with knees bent, hands on floor behind you, fingers pointing back. Slide hips forward.',
                image: 'seated-bicep'
            },
            {
                name: 'Doorway Bicep Stretch',
                duration: '30 sec each arm',
                description: 'Grip doorframe at shoulder height, arm straight. Rotate body away while keeping grip.',
                image: 'doorway-bicep'
            }
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
            {
                name: 'Overhead Tricep Stretch',
                duration: '30 sec each arm',
                description: 'Raise right arm, bend elbow so hand reaches toward upper back. Use left hand to gently push elbow back.',
                image: 'overhead-tricep'
            },
            {
                name: 'Wall Tricep Stretch',
                duration: '30 sec each arm',
                description: 'Face wall, place elbow and forearm on wall above head. Lean into wall to deepen stretch.',
                image: 'wall-tricep'
            },
            {
                name: 'Towel Tricep Stretch',
                duration: '20-30 sec each side',
                description: 'Hold towel overhead with one hand, reach behind back with other hand to grab towel. Gently pull.',
                image: 'towel-tricep'
            }
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
            {
                name: 'Wrist Flexor Stretch',
                duration: '30 sec each arm',
                description: 'Extend arm forward, palm up. Use other hand to gently pull fingers toward floor.',
                image: 'wrist-flexor'
            },
            {
                name: 'Wrist Extensor Stretch',
                duration: '30 sec each arm',
                description: 'Extend arm forward, palm down. Use other hand to gently pull fingers toward body.',
                image: 'wrist-extensor'
            },
            {
                name: 'Prayer Stretch',
                duration: '30 sec',
                description: 'Press palms together in front of chest. Lower hands while keeping palms together.',
                image: 'prayer-stretch'
            }
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
            {
                name: 'Cobra Pose',
                duration: '20-30 sec',
                description: 'Lie face down, hands under shoulders. Press up, lifting chest while keeping hips on floor.',
                image: 'cobra-pose'
            },
            {
                name: 'Cat-Cow Stretch',
                duration: '10 cycles',
                description: 'On hands and knees, alternate between arching back up (cat) and dropping belly down (cow).',
                image: 'cat-cow'
            },
            {
                name: 'Standing Side Bend',
                duration: '20 sec each side',
                description: 'Stand tall, reach right arm overhead and bend to left side. Keep hips stable.',
                image: 'side-bend'
            }
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
            {
                name: 'Kneeling Hip Flexor Stretch',
                duration: '30-45 sec each side',
                description: 'Kneel on one knee, other foot forward. Tuck pelvis under and shift weight forward.',
                image: 'kneeling-hip-flexor'
            },
            {
                name: 'Couch Stretch',
                duration: '1-2 min each side',
                description: 'Kneel facing away from couch, place back foot on cushion. Keep torso upright, squeeze glute.',
                image: 'couch-stretch'
            },
            {
                name: 'Low Lunge',
                duration: '30-45 sec each side',
                description: 'From lunge position, drop back knee to floor. Sink hips forward and down.',
                image: 'low-lunge'
            }
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
            {
                name: 'Standing Quad Stretch',
                duration: '30 sec each leg',
                description: 'Stand on one leg, pull other heel toward glute. Keep knees together and pelvis tucked.',
                image: 'standing-quad'
            },
            {
                name: 'Prone Quad Stretch',
                duration: '30-45 sec each leg',
                description: 'Lie face down, bend knee and grab ankle. Gently pull heel toward glute.',
                image: 'prone-quad'
            },
            {
                name: 'Kneeling Quad Stretch',
                duration: '30 sec each leg',
                description: 'In lunge position, grab back foot and pull toward glute for deeper hip flexor and quad stretch.',
                image: 'kneeling-quad'
            }
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
            {
                name: 'Kneeling Shin Stretch',
                duration: '30 sec',
                description: 'Kneel with tops of feet flat on floor, toes pointing back. Gently sit back on heels.',
                image: 'kneeling-shin'
            },
            {
                name: 'Toe Drag Stretch',
                duration: '20 sec each side',
                description: 'Stand and place top of one foot on floor behind you. Gently press down to stretch shin.',
                image: 'toe-drag'
            },
            {
                name: 'Heel Walking',
                duration: '30 sec',
                description: 'Walk on heels with toes pointed up. Strengthens and stretches shin muscles.',
                image: 'heel-walk'
            }
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
            {
                name: 'Cat Stretch',
                duration: '20 sec',
                description: 'On hands and knees, round back toward ceiling while tucking chin. Spread shoulder blades.',
                image: 'cat-stretch'
            },
            {
                name: 'Seated Twist',
                duration: '30 sec each side',
                description: 'Sit tall, cross right leg over left. Twist torso to right using left elbow against right knee.',
                image: 'seated-twist'
            },
            {
                name: 'Hands Clasped Forward',
                duration: '20-30 sec',
                description: 'Clasp hands in front, push palms away while rounding upper back. Feel stretch between shoulder blades.',
                image: 'hands-forward'
            }
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
            {
                name: 'Thoracic Extension',
                duration: '30 sec per spot',
                description: 'Place foam roller under mid-back. Support head, extend over roller. Move to different spots.',
                image: 'thoracic-extension'
            },
            {
                name: 'Open Book Stretch',
                duration: '30 sec each side',
                description: 'Lie on side with knees bent. Rotate top arm and upper body to open toward ceiling.',
                image: 'open-book'
            },
            {
                name: 'Child\'s Pose Reach',
                duration: '30-45 sec',
                description: 'Kneel and sit back on heels, stretch arms forward. Walk hands to one side for side stretch.',
                image: 'childs-pose'
            }
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
            {
                name: 'Knee-to-Chest Stretch',
                duration: '30-45 sec',
                description: 'Lie on back, pull one or both knees toward chest. Hold behind thighs.',
                image: 'knee-to-chest'
            },
            {
                name: 'Child\'s Pose',
                duration: '1-2 min',
                description: 'Kneel and sit back on heels, fold forward with arms extended. Relax completely.',
                image: 'childs-pose'
            },
            {
                name: 'Supine Twist',
                duration: '30-45 sec each side',
                description: 'Lie on back, bring knees to chest then let them fall to one side. Keep shoulders flat.',
                image: 'supine-twist'
            }
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
            {
                name: 'Pigeon Pose',
                duration: '1-2 min each side',
                description: 'From hands and knees, bring right knee forward behind right wrist. Extend left leg back.',
                image: 'pigeon-pose'
            },
            {
                name: 'Figure-4 Stretch',
                duration: '30-45 sec each side',
                description: 'Lie on back, cross right ankle over left knee. Pull left thigh toward chest.',
                image: 'figure-four'
            },
            {
                name: 'Seated Piriformis Stretch',
                duration: '30 sec each side',
                description: 'Sit in chair, cross ankle over opposite knee. Lean forward with straight back.',
                image: 'seated-piriformis'
            }
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
            {
                name: 'Standing Hamstring Stretch',
                duration: '30-45 sec each leg',
                description: 'Place heel on low surface, keep leg straight. Hinge forward at hips with flat back.',
                image: 'standing-hamstring'
            },
            {
                name: 'Lying Hamstring Stretch',
                duration: '30-45 sec each leg',
                description: 'Lie on back, raise one leg and hold behind thigh. Keep leg as straight as possible.',
                image: 'lying-hamstring'
            },
            {
                name: 'Seated Forward Fold',
                duration: '30-45 sec',
                description: 'Sit with legs extended, hinge forward at hips reaching toward toes. Keep back flat.',
                image: 'forward-fold'
            }
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
            {
                name: 'Wall Calf Stretch',
                duration: '30 sec each leg',
                description: 'Face wall, step one foot back, keep heel down and leg straight. Lean into wall.',
                image: 'wall-calf'
            },
            {
                name: 'Soleus Stretch',
                duration: '30 sec each leg',
                description: 'Same as wall calf stretch but bend back knee slightly. Targets deeper soleus muscle.',
                image: 'soleus-stretch'
            },
            {
                name: 'Step Stretch',
                duration: '30-45 sec each leg',
                description: 'Stand on step with heel hanging off edge. Let heel drop below step level.',
                image: 'step-stretch'
            }
        ]
    }
};

// State
let currentView = 'front';
let selectedMuscle = null;

// DOM Elements
const frontBtn = document.getElementById('frontBtn');
const backBtn = document.getElementById('backBtn');
const frontView = document.getElementById('frontView');
const backView = document.getElementById('backView');
const infoPanel = document.getElementById('infoPanel');

// Toggle between front and back view
frontBtn.addEventListener('click', () => {
    if (currentView !== 'front') {
        currentView = 'front';
        frontView.classList.remove('hidden');
        backView.classList.add('hidden');
        frontBtn.classList.add('active');
        backBtn.classList.remove('active');
        clearSelection();
        showEmptyPanel();
    }
});

backBtn.addEventListener('click', () => {
    if (currentView !== 'back') {
        currentView = 'back';
        backView.classList.remove('hidden');
        frontView.classList.add('hidden');
        backBtn.classList.add('active');
        frontBtn.classList.remove('active');
        clearSelection();
        showEmptyPanel();
    }
});

// Clear all muscle selections
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

// Get stretch image HTML
function getStretchImageHTML(imageKey) {
    const url = stretchImageUrls[imageKey];
    if (url) {
        return `<img src="${url}" alt="Stretch demonstration" loading="lazy">`;
    }
    return `<div style="padding: 2rem; text-align: center; color: #999;">Image not available</div>`;
}

// Display muscle information
function showMuscleInfo(muscleId) {
    const data = muscleData[muscleId];
    if (!data) return;

    infoPanel.classList.remove('empty');

    const stretchesHTML = data.stretches.map(s => `
        <div class="stretch-card">
            <div class="stretch-image">
                ${getStretchImageHTML(s.image)}
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

    // Select all muscle groups with same data-muscle value (for paired muscles)
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
