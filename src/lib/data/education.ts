// Education section content and metadata
export interface EducationTopic {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name
  sections: {
    heading: string;
    content: string;
  }[];
}

export const educationTopics: EducationTopic[] = [
  {
    slug: 'shoulder-anatomy',
    title: 'Shoulder Anatomy',
    shortTitle: 'Shoulder',
    description:
      'Understanding the complex anatomy of the shoulder joint, including bones, muscles, ligaments, and tendons.',
    icon: 'Bone',
    sections: [
      {
        heading: 'Overview',
        content:
          'The shoulder is the most mobile joint in the human body, allowing a wide range of motion in multiple planes. This remarkable mobility comes from the coordination of several structures working together, but it also makes the shoulder vulnerable to injury.'
      },
      {
        heading: 'Bones & Joints',
        content:
          'The shoulder complex consists of three bones: the clavicle (collarbone), scapula (shoulder blade), and humerus (upper arm bone). These bones form three joints: the glenohumeral joint (the main ball-and-socket), the acromioclavicular (AC) joint, and the sternoclavicular (SC) joint.'
      },
      {
        heading: 'Rotator Cuff',
        content:
          'The rotator cuff is a group of four muscles and their tendons (supraspinatus, infraspinatus, teres minor, and subscapularis) that surround the shoulder joint. These muscles work together to stabilize the humeral head within the glenoid socket and enable rotation and elevation of the arm.'
      },
      {
        heading: 'Labrum',
        content:
          'The glenoid labrum is a ring of fibrocartilage that surrounds the glenoid (socket) of the shoulder. It deepens the socket by up to 50%, providing stability to the joint. The labrum also serves as an attachment point for the biceps tendon and several ligaments.'
      }
    ]
  },
  {
    slug: 'glenohumeral-osteoarthritis',
    title: 'What is Glenohumeral Osteoarthritis?',
    shortTitle: 'Shoulder OA',
    description:
      'Learn about osteoarthritis of the shoulder joint, its causes, symptoms, and treatment options.',
    icon: 'Activity',
    sections: [
      {
        heading: 'What is Glenohumeral Osteoarthritis?',
        content:
          'Glenohumeral osteoarthritis (OA) is a degenerative condition in which the cartilage that covers the surfaces of the ball (humeral head) and socket (glenoid) of the shoulder wears away over time. As the cartilage thins and eventually erodes, the underlying bone becomes exposed, leading to pain, stiffness, and decreased function.'
      },
      {
        heading: 'Causes & Risk Factors',
        content:
          'While age is the most common risk factor, glenohumeral OA can also result from previous injuries (such as fractures or dislocations), repetitive overhead activities, inflammatory conditions like rheumatoid arthritis, or prior surgical procedures. Genetics may also play a role in susceptibility.'
      },
      {
        heading: 'Symptoms',
        content:
          'Common symptoms include deep shoulder pain that worsens with activity, stiffness and loss of range of motion, grinding or clicking sensations, night pain that disrupts sleep, and difficulty with everyday activities like reaching overhead or behind the back.'
      },
      {
        heading: 'Treatment Options',
        content:
          'Treatment typically begins with conservative measures including activity modification, physical therapy, anti-inflammatory medications, and corticosteroid injections. When non-operative treatments no longer provide adequate relief, shoulder replacement surgery may be recommended to restore function and eliminate pain.'
      }
    ]
  },
  {
    slug: 'shoulder-replacement',
    title: 'Anatomic vs Reverse Shoulder Arthroplasty',
    shortTitle: 'Shoulder Replacement',
    description:
      'Comparing the two types of shoulder replacement surgery and when each is recommended.',
    icon: 'Replace',
    sections: [
      {
        heading: 'Overview of Shoulder Replacement',
        content:
          'Shoulder arthroplasty (replacement) is a surgical procedure that replaces damaged parts of the shoulder joint with artificial components. There are two main types: anatomic total shoulder arthroplasty (TSA) and reverse total shoulder arthroplasty (RTSA). The choice between them depends on the condition of the rotator cuff, bone quality, and the specific pathology.'
      },
      {
        heading: 'Anatomic Total Shoulder Arthroplasty',
        content:
          'In an anatomic TSA, the natural anatomy of the shoulder is replicated. A metal ball replaces the humeral head, and a plastic socket replaces the glenoid. This procedure is ideal for patients with an intact, functioning rotator cuff and is most commonly performed for osteoarthritis with preserved muscle function.'
      },
      {
        heading: 'Reverse Total Shoulder Arthroplasty',
        content:
          'In a reverse TSA, the positions of the ball and socket are switched—a metal ball is attached to the glenoid, and a plastic socket is placed on the humerus. This design allows the deltoid muscle to power the arm, bypassing the need for a functioning rotator cuff. It is indicated for rotator cuff arthropathy, massive irreparable rotator cuff tears, and certain fracture patterns.'
      },
      {
        heading: 'Recovery & Outcomes',
        content:
          'Both procedures have excellent long-term outcomes, with most patients experiencing significant pain relief and improved function. Recovery typically involves a period of immobilization followed by a structured physical therapy program. Most patients see substantial improvement within 3 to 6 months, with continued gains up to a year after surgery.'
      }
    ]
  },
  {
    slug: 'rotator-cuff-tears',
    title: 'What is a Rotator Cuff Tear? How is it Repaired?',
    shortTitle: 'Rotator Cuff',
    description:
      'Understanding rotator cuff injuries, from partial to full-thickness tears, and surgical repair options.',
    icon: 'Stethoscope',
    sections: [
      {
        heading: 'What is a Rotator Cuff Tear?',
        content:
          'A rotator cuff tear occurs when one or more of the four rotator cuff tendons are damaged or torn. Tears can be partial (affecting only part of the tendon thickness) or full-thickness (extending completely through the tendon). They can result from acute injury, such as a fall or lifting a heavy object, or from chronic degeneration over time.'
      },
      {
        heading: 'Symptoms',
        content:
          'Patients with rotator cuff tears typically experience pain in the shoulder and upper arm, especially with overhead activities or reaching behind the back. Weakness in the affected arm, difficulty sleeping on the injured side, and a catching or crackling sensation with movement are also common symptoms.'
      },
      {
        heading: 'Diagnosis',
        content:
          'Diagnosis involves a physical examination to assess strength, range of motion, and specific provocative tests. Imaging studies such as X-rays (to evaluate bone structure) and MRI (to visualize the soft tissues and assess tear size and location) are typically obtained to confirm the diagnosis and guide treatment planning.'
      },
      {
        heading: 'Surgical Repair',
        content:
          'When surgery is indicated, rotator cuff repair is most commonly performed arthroscopically through small incisions using a camera and specialized instruments. The torn tendon is reattached to the bone using suture anchors. Recovery involves a period of immobilization in a sling followed by a progressive rehabilitation program to restore motion and strength.'
      }
    ]
  },
  {
    slug: 'labral-tears',
    title: 'What is a Labral Tear? How is it Repaired?',
    shortTitle: 'Labral Tears',
    description:
      'Learn about labral tears of the shoulder, including SLAP tears, Bankart lesions, and arthroscopic repair.',
    icon: 'Shield',
    sections: [
      {
        heading: 'What is a Labral Tear?',
        content:
          'The labrum is a ring of fibrocartilage that surrounds the glenoid (socket) of the shoulder, providing stability and serving as an attachment point for ligaments and the biceps tendon. A labral tear occurs when this cartilage ring is damaged, which can lead to instability, pain, and mechanical symptoms in the shoulder.'
      },
      {
        heading: 'Types of Labral Tears',
        content:
          'The most common types include SLAP tears (Superior Labrum Anterior to Posterior), which affect the top of the labrum where the biceps tendon attaches, and Bankart lesions, which involve the lower front portion of the labrum and are commonly associated with shoulder dislocations. Posterior labral tears can also occur, particularly in athletes.'
      },
      {
        heading: 'Symptoms & Diagnosis',
        content:
          'Symptoms may include a deep ache in the shoulder, catching or locking sensations, pain with overhead activities, and a feeling of instability. Diagnosis involves physical examination with specific labral tests, and MRI arthrography (MRI with contrast dye injected into the joint) is the most sensitive imaging study for detecting labral tears.'
      },
      {
        heading: 'Arthroscopic Repair',
        content:
          'Labral repair is performed arthroscopically, using small incisions and a camera to visualize the joint. The torn labrum is reattached to the glenoid rim using suture anchors. For patients with recurrent instability, additional ligament tightening (capsulorrhaphy) may be performed. Recovery involves sling immobilization followed by a structured physical therapy program.'
      }
    ]
  }
];
