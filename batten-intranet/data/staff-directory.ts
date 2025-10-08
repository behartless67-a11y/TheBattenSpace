export interface StaffMember {
  name: string;
  position: string;
  biography: string;
  firstName: string;
  lastName: string;
  phone?: string;
  building?: string;
  officeNumber?: string;
  photo: string;
}

export const staffDirectory: StaffMember[] = [
  {
    name: "Achilles, Colin Van Buren",
    position: "Associate Director, Center for Effective Lawmaking",
    biography: "Colin Achilles is the Associate Director of the Center for Effective Lawmaking (CEL), a joint partnership between the Batten School and Vanderbilt University. He is the manager of day-to-day operations of CEL. Born and raised in Virginia, Achilles completed his undergraduate work at Flagler College in Political Science and his graduate work at the Graduate School of Political Management at The George Washington University.",
    firstName: "Colin",
    lastName: "Achilles",
    phone: "434-243-7180",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L028",
    photo: "/staff-photos/Achiles.png"
  },
  {
    name: "Anderson, Shawn",
    position: "Associate Director of Student Services & Community Engagement",
    biography: "As Associate Director of Student Services and Community Engagement, Anderson advises undergraduate and graduate students in their co-curricular and service-related endeavors, and also organizes school-wide student programming, including wellness related events and graduation.",
    firstName: "Shawn",
    lastName: "Anderson",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L002A",
    photo: "/staff-photos/Anderson.jpeg"
  },
  {
    name: "Austin, Maura",
    position: "Postdoctoral Research Associate",
    biography: "Maura Austin is a postdoctoral researcher at the Frank Batten School of Leadership and Public Policy. She studies person perception, motivation, social judgment and decision making, and moral character judgment.",
    firstName: "Maura",
    lastName: "Austin",
    photo: "/placeholder-staff.jpg"
  },
  {
    name: "Baumeister, Natalie Paige",
    position: "Lab Manager, JADE and SoBaD Labs",
    biography: "Natalie Baumeister is the Lab Manager for the Judgments and Decisions Experimental (JADE) Lab and the Social Behavior and Decisions (SoBaD) Lab in the Frank Batten School of Leadership and Public Policy.",
    firstName: "Natalie",
    lastName: "Baumeister",
    photo: "/staff-photos/Baumeister.jpg"
  },
  {
    name: "Brown, Xanni",
    position: "Postdoctoral Research Associate",
    biography: "Xanni Brown is a postdoctoral fellow at the Frank Batten School of Leadership and Public Policy at the University of Virginia. She is a social and political psychologist studying hierarchy, inequality, and democracy in the U.S.",
    firstName: "Xanni",
    lastName: "Brown",
    photo: "/staff-photos/Brown.jpg"
  },
  {
    name: "Carter Mulligan, Anne Mitchell",
    position: "Senior Director of Admissions",
    biography: "Anne Carter Mulligan joined Batten in January 2019 as Director of Undergraduate Admissions. She's held multiple roles in higher education, most recently as Director of Strategic Initiatives in Enrollment Management at Longwood University.",
    firstName: "Anne",
    lastName: "Carter Mulligan",
    phone: "434-982-0685",
    building: "Garrett Hall – Second Floor",
    officeNumber: "204",
    photo: "/staff-photos/Mulligan.png"
  },
  {
    name: "Cathro, James",
    position: "Director of Finance and Business Services",
    biography: "James is the Director of Finance and Business Services at the Frank Batten School of Leadership and Public Policy. A 2005 US Naval Academy graduate and 2016 Batten School alumnus, James initially worked in UVA's Office of Financial Planning and Analysis.",
    firstName: "James",
    lastName: "Cathro",
    phone: "434-982-6761",
    photo: "/staff-photos/Cathro.png"
  },
  {
    name: "Chidester, Jeff L",
    position: "Executive Director of External Affairs",
    biography: "Jeff Chidester is the Executive Director of External Affairs, where he oversees recruitment into the Batten School's academic and lifelong learning programs.",
    firstName: "Jeff",
    lastName: "Chidester",
    phone: "434-982-0685",
    building: "Garrett Hall – Second Floor",
    officeNumber: "200B",
    photo: "/staff-photos/Chidester.jpeg"
  },
  {
    name: "Crombie, Amanda Joan",
    position: "Senior Assistant Dean for Students and Academic Programs",
    biography: "Amanda Crombie is the Batten School's Senior Assistant Dean for Students and Academic Programs. Amanda and her teams support the operational aspects of our academic programming and overall student experience from matriculation and orientation through graduation.",
    firstName: "Amanda",
    lastName: "Crombie",
    phone: "434-243-9976",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L052",
    photo: "/staff-photos/Crombie.jpeg"
  },
  {
    name: "Davis, Alec",
    position: "Lab Manager, CHIP and Motivation Science Labs",
    biography: "Alec Davis is the Lab Manager for the Culture, History, Identity, and Policy Lab and the Social Motivation Lab in the Frank Batten School of Leadership and Public Policy.",
    firstName: "Alec",
    lastName: "Davis",
    photo: "/staff-photos/davis.jpeg"
  },
  {
    name: "Davis, Timothy Leland",
    position: "Associate Professor of Leadership and Public Policy",
    biography: "Tim Davis is associate professor of leadership and public policy at the Frank Batten School of Leadership and Public Policy. A clinical psychologist, Davis helps students, executives and teams achieve more by building resiliency, community and self-awareness.",
    firstName: "Timothy",
    lastName: "Davis",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L020C",
    photo: "/staff-photos/Davis_Tim.jpeg"
  },
  {
    name: "Downs, Heather L.",
    position: "Director of Academic Operations",
    biography: "Heather Downs joined Batten in December 2023 as the Director of Academic Operations. She has served UVA Athletics since 2013, most recently as the Executive Director of Student Development.",
    firstName: "Heather",
    lastName: "Downs",
    phone: "434-924-6035",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L050",
    photo: "/staff-photos/Downs.jpg"
  },
  {
    name: "Edunuri, Nikitha",
    position: "Salesforce Application Manager",
    biography: "Nikitha Edunuri serves as the Salesforce Application Manager for the University of Virginia's Frank Batten School, specializing in implementing, customizing, and supporting the Salesforce CRM platform.",
    firstName: "Nikitha",
    lastName: "Edunuri",
    photo: "/staff-photos/Edunuri.png"
  },
  {
    name: "Flattery, Sean Michael",
    position: "Assistant Director of Events and Operations",
    biography: "As assistant director of events and operations, Sean Michael supports the Batten School's mission by ensuring the efficient planning and execution of key events and daily operations.",
    firstName: "Sean Michael",
    lastName: "Flattery",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L020A",
    photo: "/staff-photos/Flattery.jpg"
  },
  {
    name: "Foliaco, Kayla Christina",
    position: "Senior Student Services Coordinator",
    biography: "Kayla serves as the Batten School's Senior Student Services Coordinator. She rejoined grounds after receiving her Bachelor of Arts and Master of Education degrees from UVA in 2022 and 2023 respectively.",
    firstName: "Kayla",
    lastName: "Foliaco",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L002",
    photo: "/staff-photos/Foliaco.png"
  },
  {
    name: "Ford, Regina",
    position: "Business Services Specialist",
    biography: "Regina Ford is the Business Services Specialist for the Batten School and supports multiple areas of our Finance and Business Services team.",
    firstName: "Regina",
    lastName: "Ford",
    photo: "/staff-photos/ford.jpg"
  },
  {
    name: "Hadijski, George",
    position: "Program Associate, Center for Effective Lawmaking",
    biography: "George Hadijski is the Senior Program Associate at the Center for Effective Lawmaking (CEL), a joint partnership between the Batten School and Vanderbilt University.",
    firstName: "George",
    lastName: "Hadijski",
    photo: "/staff-photos/Hadijski.png"
  },
  {
    name: "Hanks, Sarah",
    position: "Director of Career Services",
    biography: "Sarah Hanks is the Director of Career Services for the Frank Batten School. She has more than 15 years of experience in nonprofit capacity building, change management, and crisis recovery.",
    firstName: "Sarah",
    lastName: "Hanks",
    photo: "/staff-photos/Hanks.png"
  },
  {
    name: "Hartless, Ben",
    position: "Assistant Director of Information Technology",
    biography: "Ben is the Assistant Director of Information Technology at the Batten School. Ben was born and raised an hour away in Lexington, Virginia where he worked at Washington and Lee University for 13 years.",
    firstName: "Ben",
    lastName: "Hartless",
    phone: "1-540-460-7676",
    building: "Garrett Hall – First Floor",
    officeNumber: "104",
    photo: "/staff-photos/Hartless.png"
  },
  {
    name: "Henry, Andrea Marie",
    position: "Events Manager",
    biography: "Andrea Henry is an experienced professional fulfilling the role as our Events Manager. A University of Virginia alumna, class of 2019, with a dual degree in Art History and Sociology.",
    firstName: "Andrea",
    lastName: "Henry",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L020A",
    photo: "/staff-photos/Henry.jpg"
  },
  {
    name: "Holmsted, Jon",
    position: "Director of Development",
    biography: "Jon joins the Batten School from the Virginia Athletics Foundation where he has served for two years, most recently as Director of Major Gifts.",
    firstName: "Jon",
    lastName: "Holmsted",
    photo: "/staff-photos/Holmsted, J.jpeg"
  },
  {
    name: "Licata, Gianpaolo Francesco",
    position: "Associate Director of Academic Operations",
    biography: "Gianpaolo Licata is the Associate Director of Academic Operations at the Frank Batten School of Leadership and Public Policy at the University of Virginia.",
    firstName: "Gianpaolo",
    lastName: "Licata",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L044",
    photo: "/staff-photos/Licata.png"
  },
  {
    name: "Lin, Tina Yi",
    position: "Associate Director, Center for Social Innovation",
    biography: "Tina Lin is the Associate Director for the Center for Social Innovation in the Frank Batten School of Leadership and Public Policy at the University of Virginia.",
    firstName: "Tina",
    lastName: "Lin",
    building: "Chancellor Apartments",
    officeNumber: "206",
    photo: "/staff-photos/Lin.jpg"
  },
  {
    name: "Lindqvist, Craig Selwyn",
    position: "Associate Dean for Administration",
    biography: "Craig Lindqvist serves as the Associate Dean for Administration at the Batten School where he oversees the school's business affairs, planning, finances, personnel, technology, facilities, and other non-academic functions.",
    firstName: "Craig",
    lastName: "Lindqvist",
    building: "Garrett Hall – Second Floor",
    officeNumber: "200B",
    photo: "/staff-photos/Lindqvist.png"
  },
  {
    name: "Ludovici, Jennifer Lynne",
    position: "Director of Operations for National Security Initiatives",
    biography: "Jennifer Ludovici is the NSPC Director of Operations & Research Initiatives. She has over 18 years of experience in higher education administration in both the public and private sector.",
    firstName: "Jennifer",
    lastName: "Ludovici",
    phone: "804 564-5021",
    photo: "/staff-photos/Ludovici.png"
  },
  {
    name: "Marsh, Brandy A",
    position: "Business Services Manager",
    biography: "Brandy Marsh is the Business Services Manager for the Frank Batten School. She joined Batten in 2020, bringing her administrative experience in various UVA and commercial roles to the team.",
    firstName: "Brandy",
    lastName: "Marsh",
    phone: "434 996-2643",
    photo: "/staff-photos/Marsh.png"
  },
  {
    name: "McCue, Cathryn",
    position: "Assistant Director of Communications",
    biography: "Cat McCue brings extensive communications, storytelling, public service, and policy experience to the Batten School from her prior roles at the UVA Office for Sustainability.",
    firstName: "Cathryn",
    lastName: "McCue",
    photo: "/staff-photos/McCue.png"
  },
  {
    name: "Moore, Cindy",
    position: "Assistant Director of Accounting",
    biography: "Cindy Moore is an integral member of the Batten School's administration. As Assistant Director of Accounting, she provides foundational support for the School's fiscal operations.",
    firstName: "Cindy",
    lastName: "Moore",
    photo: "/staff-photos/Moore.png"
  },
  {
    name: "Murphy, Jennett V",
    position: "Assistant Director of Faculty Affairs",
    biography: "Jennett Murphy is the Assistant Director of Faculty Affairs at the Batten School; she supports and manages processes to advance the success of the faculty.",
    firstName: "Jennett",
    lastName: "Murphy",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L042",
    photo: "/staff-photos/Murphy.jpg"
  },
  {
    name: "Nelson, Kristine",
    position: "Associate Director of Academic Operations",
    biography: "Kristine Nelson is an Associate Director of Academic Operations at the Frank Batten School of Leadership and Public Policy. Prior to joining the Batten School in 2017, Kristine worked for four years at the School of Architecture.",
    firstName: "Kristine",
    lastName: "Nelson",
    photo: "/staff-photos/Nelson_Kristine.jpeg"
  },
  {
    name: "Nelson, Mark Andrew",
    position: "Advancement Associate",
    biography: "Mark Nelson is an advancement associate at the Frank Batten School of Leadership and Public Policy. A native of the Shenandoah Valley, he graduated from the University of Virginia.",
    firstName: "Mark",
    lastName: "Nelson",
    phone: "434-982-2094",
    photo: "/staff-photos/Nelson.png"
  },
  {
    name: "Outten, Mark",
    position: "Director of Information Technology and School Systems",
    biography: "Mark was most recently the Director of Technology for the Orange County Public Schools in Orange, VA, has over 20 years of education-related technology leadership and management experience.",
    firstName: "Mark",
    lastName: "Outten",
    officeNumber: "104",
    photo: "/staff-photos/Outten.png"
  },
  {
    name: "Porto, Nicolo William",
    position: "CAPS Therapist",
    biography: "Nicolo Porto is a Licensed Clinical Social Worker. He graduated from Marquette University in 2014 with a B.A. in Psychology and Sociology.",
    firstName: "Nicolo",
    lastName: "Porto",
    phone: "434-243-5150",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L001",
    photo: "/staff-photos/Porto.png"
  },
  {
    name: "Ramoutar, Navin",
    position: "Associate Director of Development",
    biography: "Navin is a results-driven professional with a robust background in marketing and fundraising. With notable tenures at Vanderbilt University and Heineken.",
    firstName: "Navin",
    lastName: "Ramoutar",
    photo: "/placeholder-staff.jpg"
  },
  {
    name: "Reinicke, Carey",
    position: "Assistant Director of Grants and Contracts",
    biography: "Carey Reinicke is the Assistant Director of Grants and Contracts within the Batten Finance unit, focusing on the management of the school's sponsored awards and related processes.",
    firstName: "Carey",
    lastName: "Reinicke",
    photo: "/staff-photos/Reinicke.jpg"
  },
  {
    name: "Robinson, John",
    position: "Photo and Video Manager",
    biography: "John Robinson manages photo and video content for the Batten School. He brings 15 years of professional photo and video experience from projects all over the world.",
    firstName: "John",
    lastName: "Robinson",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L020A",
    photo: "/staff-photos/Robinson_John_M.jpg"
  },
  {
    name: "Robinson, John",
    position: "NSPC Director of Academic Programs",
    biography: "John Robinson is the NSPC's Director of Academic Programs. He teaches undergraduate and graduate courses focused on national security.",
    firstName: "John",
    lastName: "Robinson",
    photo: "/staff-photos/Robinson_John.png"
  },
  {
    name: "Rockwell, Jill S",
    position: "Senior Assistant Dean of Career Advancement and Alumni Engagement",
    biography: "Jill Rockwell, Senior Assistant Dean of Career Advancement and Alumni Engagement, and her team are focused on the professional success of our graduates and alumni.",
    firstName: "Jill",
    lastName: "Rockwell",
    phone: "434-924-7950",
    building: "Garrett Hall – Second Floor",
    officeNumber: "203",
    photo: "/staff-photos/Rockwell.png"
  },
  {
    name: "Ross, Kara",
    position: "Research Lab Coordinator",
    biography: "Kara Ross is the Research Lab Coordinator at the Frank Batten School of Leadership and Public Policy, where she manages day-to-day operations in the School's behavioral and experimental research lab.",
    firstName: "Kara",
    lastName: "Ross",
    photo: "/staff-photos/Ross.jpeg"
  },
  {
    name: "Tappe, Elinor (Ellie)",
    position: "Executive Director of Strategic Advancement",
    biography: "Elinor Tappé serves as Executive Director of Strategic Advancement where she helps shape and realize the strategic objectives of the Batten School.",
    firstName: "Elinor",
    lastName: "Tappe",
    photo: "/staff-photos/Tappé.png"
  },
  {
    name: "Thurston, Kerra K",
    position: "Executive Assistant to the Dean",
    biography: "Kerra Thurston is the Executive Assistant to the Dean at the Frank Batten School of Leadership and Public Policy.",
    firstName: "Kerra",
    lastName: "Thurston",
    phone: "434-924-0828",
    building: "Garrett Hall – Second Floor",
    officeNumber: "200",
    photo: "/staff-photos/Thurston.png"
  },
  {
    name: "Turner, Kim",
    position: "Assistant Director of Financial Planning and Analysis",
    biography: "Kim Turner is the Assistant Director of Financial Planning and Analysis at the Frank Batten School of Leadership and Public Policy. Kim joined Batten in 2025 after a decade serving as the Finance and Administration Manager for UVA Music.",
    firstName: "Kim",
    lastName: "Turner",
    photo: "/staff-photos/Turner.png"
  },
  {
    name: "Whelchel, Jeffrey Wayne",
    position: "IT Coordinator",
    biography: "Jeffrey Whelchel holds the position of IT Coordinator at Batten, where he oversees information technology operations.",
    firstName: "Jeffrey",
    lastName: "Whelchel",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L056",
    photo: "/staff-photos/Whelchel.jpg"
  },
  {
    name: "Workman, Dakota Lee",
    position: "Operations Manager",
    biography: "Dakota Workman is a dedicated professional serving as the Events and Operations Coordinator at the Batten School, leveraging his expertise in daily operations and event management.",
    firstName: "Dakota",
    lastName: "Workman",
    building: "Garrett Hall – Lower Level",
    officeNumber: "L056",
    photo: "/placeholder-staff.jpg"
  }
];
