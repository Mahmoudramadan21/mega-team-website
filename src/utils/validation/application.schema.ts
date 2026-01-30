import { z } from 'zod';

// Define reusable regex patterns
// Egyptian mobile number regex: Supports formats like 01234567890, +201234567890, or 201234567890
const PHONE_REGEX = /^(?:\+20|0)1[0125][0-9]{8}$/;

// Helper functions for common string validations
// Creates a string schema with trim, min, and max length constraints
const requiredString = (min: number, max: number, field: string) =>
  z
    .string()
    .trim()
    .min(min, { message: `${field} must be at least ${min} characters long` })
    .max(max, { message: `${field} cannot exceed ${max} characters` });

// Long answer helper: For detailed responses with higher min length
const longAnswer = (min = 30, max = 2000, field: string) => requiredString(min, max, field);

// Short answer helper: For concise responses
const shortAnswer = (min = 2, max = 500, field: string) => requiredString(min, max, field);

// Minimum answer helper: Ensures a meaningful response without max limit
const minAnswer = (min = 10, field: string) =>
  z
    .string()
    .trim()
    .min(min, { message: `${field} is required and must be meaningful (at least ${min} characters long)` });

// URL field: Optional valid URL or empty string
const urlField = z
  .string()
  .trim()
  .url({ message: 'Please enter a valid URL' })
  .optional()
  .or(z.literal(''));

// Rating enum: 1 to 5 as strings
const rating1to5 = z.enum(['1','2','3','4','5'], {
  message: "Please select a rating from 1 to 5",
});

// Export the Zod schema for the application form
export const applicationSchema = z
  .object({
    // ──────────────────────────────────────────────────────────────────────────
    // Core required fields: Basic applicant information (always required)
    // ──────────────────────────────────────────────────────────────────────────
    fullName: shortAnswer(3, 120, 'Full name'),
    email: z.string().trim().email({ message: 'Please enter a valid email address' }).max(160),
    phoneNumber: z
      .string()
      .trim()
      .regex(PHONE_REGEX, { message: 'Please enter a valid Egyptian mobile number (e.g., 01234567890 or +201234567890)' }),
    facebookLink: urlField,
    discordUsername: z.string().trim().max(64).optional(),
    linkedInLink: urlField,
    gitHubLink: urlField,
    university: shortAnswer(2, 120, 'University').optional(),
    college: shortAnswer(2, 120, 'College').optional(),
    academicYear: z
      .enum([
        'LVL 000 (for Engineering Students)',
        'First Year',
        'Second Year',
        'Third Year',
        'Fourth Year',
      ])
      .optional(),
    location: shortAnswer(2, 120, 'Location').optional(),
    whyJoinMEGA: longAnswer(50, 1800, 'Why you want to join MEGA'),
    hopeToAchieve: longAnswer(40, 1500, 'What you hope to achieve'),
    projectsInterest: longAnswer(40, 1200, 'Project interest'),
    strengthsWeakness: longAnswer(60, 1400, 'Key strengths and weakness'),
    proudAchievement: longAnswer(50, 1200, 'Proudest achievement'),
    softSkills: longAnswer(50, 1400, 'Soft skills & experiences'),
    balanceTime: longAnswer(40, 1000, 'How you balance time'),
    teamMotivation: longAnswer(50, 1200, 'What motivates/demotivates you in teams'),
    handleFeedback: longAnswer(40, 1000, 'How you handle feedback'),
    neededHelp: longAnswer(60, 1200, 'Time you needed help'),
    teamChallenge: longAnswer(70, 1400, 'Team challenge experience'),
    newSkills: longAnswer(40, 1000, 'Skills you want to gain'),
    describeYourself: longAnswer(20, 400, 'Describe yourself in three words'),
    hoursPerWeek: z
    .string()
    .trim()
    .min(1, { message: "Please enter hours per week" })
    .regex(/^\d+$/, { message: "Must be a whole number" }),

    // ──────────────────────────────────────────────────────────────────────────
    // General ratings: Optional self-assessments
    // ──────────────────────────────────────────────────────────────────────────
    commitmentOrganization: rating1to5.optional(),
    acceptanceFeedback: rating1to5.optional(),
    nervousnessShortTemper: rating1to5.optional(),
    followUpContinuity: rating1to5.optional(),
    emotionalStability: rating1to5.optional(),
    communication: rating1to5.optional(),

    // ──────────────────────────────────────────────────────────────────────────
    // Track selection: Required to choose a track
    // ──────────────────────────────────────────────────────────────────────────
    track: z.enum(
      ['Technical Only', 'Non-Technical Only', 'Both Non Technical & Technical'],
      { message: "Please select a track" }
      ),

    // ──────────────────────────────────────────────────────────────────────────
    // Circle selections: Optional here, enforced via refinements based on track
    // ──────────────────────────────────────────────────────────────────────────
    technicalCircle: z
      .enum([
        'UIUX',
        'Frontend',
        'Backend',
        'Flutter',
        'Data Science',
        'CS - Computer Science',
        'Business Analysis',
      ])
      .optional(),
    nonTechnicalCircle: z
      .enum([
        'HR - Human Resources',
        'PR&FR - Public Relations & Fundraising',
        'R&D - Research & Development',
        'PM - Project Management',
        'EO - Event Operations',
        'Media (Graphic Design)',
        'Media (Video Editing)',
        'Media (Motion Graphics)',
      ])
      .optional(),

    // ──────────────────────────────────────────────────────────────────────────
    // Technical circle-specific fields: Optional, enforced via refinements
    // ──────────────────────────────────────────────────────────────────────────
    // UI/UX
    uiuxMeaning: minAnswer(20, 'UI/UX meaning').optional(),
    uiuxTools: minAnswer(10, 'Design tools experience').optional(),
    uiuxDifference: minAnswer(30, 'UI vs UX difference').optional(),
    uiuxPrinciples: minAnswer(20, 'Design principles').optional(),
    uiuxResearch: minAnswer(30, 'User research & testing').optional(),

    // Frontend
    frontendHtml: minAnswer(30, 'What is HTML').optional(),
    frontendHeadingTag: minAnswer(5, 'Heading tag').optional(),
    frontendCssColor: minAnswer(20, 'Change text color in CSS').optional(),
    frontendJsVars: minAnswer(40, 'var/let/const difference').optional(),
    frontendReactComponents: minAnswer(40, 'Class vs Functional components').optional(),

    // Backend
    backendClassObject: minAnswer(30, 'Class vs Object in C#').optional(),
    backendDeleteTruncate: minAnswer(30, 'DELETE vs TRUNCATE').optional(),
    backendSqlQuery: minAnswer(10, 'SQL SELECT query').optional(),
    backendInterfaceAbstract: minAnswer(40, 'Interface vs Abstract Class').optional(),
    backendValueReference: minAnswer(40, 'Value vs Reference Types').optional(),
    backendRest: minAnswer(40, 'What is REST').optional(),

    // Flutter
    flutterWidget: minAnswer(40, 'What is a Widget').optional(),
    flutterState: minAnswer(40, 'State & stateless/stateful').optional(),
    flutterMainDart: minAnswer(30, 'main.dart purpose').optional(),
    flutterSyncAsync: minAnswer(30, 'Sync vs Async in Dart').optional(),
    flutterStateManagement: minAnswer(40, 'State Management approaches').optional(),

    // Data Science
    dataScienceTopics: minAnswer(30, 'Topics to learn').optional(),
    dataScienceTime: minAnswer(20, 'Weekly time commitment').optional(),
    dataScienceTools: minAnswer(10, 'Data analysis tools').optional(),
    dataSciencePythonLevel: minAnswer(20, 'Python libraries skill level').optional(),
    dataScienceProject: minAnswer(50, 'Data science project description').optional(),

    // CS - Computer Science (MCQ)
    csKeyword: z.string().min(1, 'Please select an answer').optional(),
    csArrayIndex: z.string().min(1, 'Please select an answer').optional(),
    csOopPrinciple: z.string().min(1, 'Please select an answer').optional(),
    csStlContainer: z.string().min(1, 'Please select an answer').optional(),
    csTimeComplexity: z.string().min(1, 'Please select an answer').optional(),

    // Business Analysis
    baRole: minAnswer(40, 'Business Analyst role').optional(),
    baDifference: minAnswer(50, 'BA vs Business Development').optional(),
    baProject: minAnswer(50, 'BA project experience').optional(),
    baRequirements: minAnswer(50, 'Functional vs non-functional requirements').optional(),
    baDiagrams: minAnswer(40, 'Diagrams experience').optional(),

    // ──────────────────────────────────────────────────────────────────────────
    // Non-technical circle-specific fields: Optional, enforced via refinements
    // ──────────────────────────────────────────────────────────────────────────
    // HR - Human Resources
    hrWhyJoin: minAnswer(50, 'Why join HR').optional(),
    hrExperience: minAnswer(20, 'HR experience').optional(),
    hrHandleMember: minAnswer(50, 'Handling difficult members').optional(),
    hrQualities: minAnswer(40, 'Important qualities for new members').optional(),
    hrActivity: minAnswer(50, 'New member introduction activity').optional(),
    hrRoleDescription: minAnswer(30, 'HR role description').optional(),
    hrImportantRule: minAnswer(30, 'Most important team rule').optional(),
    // HR ratings
    hrPunctualityCommitment: rating1to5.optional(),
    hrActiveParticipation: rating1to5.optional(),
    hrTeamworkCollaboration: rating1to5.optional(),
    hrTimeManagement: rating1to5.optional(),
    hrPositivityMotivation: rating1to5.optional(),
    hrResponsibilityOwnership: rating1to5.optional(),
    hrFlexibilityAdaptability: rating1to5.optional(),
    hrRespectRules: rating1to5.optional(),
    hrSolveProblems: rating1to5.optional(),

    // PR&FR - Public Relations & Fundraising
    prfrWhyChoose: minAnswer(40, 'Why PR&FR').optional(),
    prfrAddToCircle: minAnswer(30, 'What you bring to PR&FR').optional(),
    prfrSkillsAfterYear: minAnswer(30, 'Skills after one year').optional(),
    prfrConvinceOthers: minAnswer(20, 'Willingness to convince others').optional(),
    prfrSuddenTask: minAnswer(40, 'Handling sudden tasks').optional(),
    prfrHoursPerWeek: minAnswer(10, 'Weekly hours for PR&FR').optional(),
    prfrAttendMeetings: minAnswer(20, 'Meeting attendance').optional(),

    // R&D - Research & Development
    rndKnowledge: minAnswer(30, 'R&D knowledge & why choose it').optional(),
    rndImportance: minAnswer(30, 'Importance of R&D to team').optional(),
    rndLastBook: minAnswer(20, 'Last book/article read').optional(),
    rndDigitalContent: minAnswer(20, 'Digital content experience').optional(),
    rndDevelopSelf: minAnswer(40, 'How this helps you develop').optional(),
    rndStayMotivated: minAnswer(40, 'Staying motivated on new tasks').optional(),
    rndUnlimitedResources: minAnswer(30, 'Unlimited resources task').optional(),
    // R&D ratings
    rndWordSkills: rating1to5.optional(),
    rndSearchingSkills: rating1to5.optional(),
    rndTimeManagement: rating1to5.optional(),

    // PM - Project Management
    pmCommunicationWay: z.string().min(1, 'Please select your preferred communication way').optional(),
    pmTeamLeaderFocus: minAnswer(30, 'Team leader focus').optional(),
    pmNewProblem: minAnswer(30, 'How you start solving new problems').optional(),
    pmChangesNormal: minAnswer(30, 'Opinion on plan changes').optional(),
    pmConnectGoalTasks: minAnswer(40, 'Connecting goals to tasks').optional(),
    pmPersonalQuality: minAnswer(20, 'Most valued personal quality').optional(),
    pmTaskTool: minAnswer(10, 'Task management tools experience').optional(),
    pmFixedFlexiblePlan: minAnswer(40, 'Fixed vs flexible plans').optional(),
    pmManageTime: minAnswer(40, 'Time management with multiple tasks').optional(),
    pmPresentIdea: minAnswer(30, 'Preparing to present an idea').optional(),

    // EO - Event Operations
    eoKnowledge: minAnswer(20, 'Knowledge about EO').optional(),
    eoWhyChoose: minAnswer(30, 'Why choose EO').optional(),
    eoOfflineTimes: minAnswer(10, 'Offline participation frequency').optional(),
    eoUnderPressure: minAnswer(50, 'Working under pressure example').optional(),
    eoNotPrefer: minAnswer(20, 'What you don’t prefer in EO').optional(),
    eoTeamProblem: minAnswer(40, 'Handling team problems').optional(),

    // Media (Graphic Design)
    mediaGdAboutSelf: minAnswer(40, 'About yourself & design background').optional(),
    mediaGdInspiration: minAnswer(30, 'Inspiration to become designer').optional(),
    mediaGdInterest: minAnswer(30, 'Interest in Media Circle').optional(),
    mediaGdSocialExperience: minAnswer(20, 'Social media content experience').optional(),
    mediaGdSoftware: minAnswer(20, 'Design software comfort level').optional(),
    mediaGdApproachProject: minAnswer(40, 'Design project approach').optional(),
    mediaGdFeedback: minAnswer(30, 'Handling design feedback').optional(),
    mediaGdTeamExperience: minAnswer(30, 'Creative/media team experience').optional(),
    mediaGdDeadlines: minAnswer(30, 'Managing multiple deadlines').optional(),
    mediaGdVagueInstructions: minAnswer(40, 'Handling vague instructions').optional(),
    mediaGdShortTimePost: minAnswer(40, 'Handling tight social media deadlines').optional(),
    mediaGdDisagreeDesign: minAnswer(40, 'Resolving design disagreements').optional(),

    // Media (Video Editing)
    mediaVeInterest: minAnswer(20, 'Interest in video editing').optional(),
    mediaVeTriedEditing: minAnswer(30, 'Video editing experience').optional(),
    mediaVeHopeLearn: minAnswer(30, 'Skills to learn in video editing').optional(),
    mediaVeDeadlinePlan: minAnswer(30, 'Planning time for deadlines').optional(),
    mediaVeDifferentIdea: minAnswer(40, 'Handling differing video ideas').optional(),
    mediaVeTools: minAnswer(20, 'Video editing tools used').optional(),
    mediaVePatience: minAnswer(30, 'Dealing with editing patience').optional(),
    mediaVeHoursPerWeek: minAnswer(10, 'Weekly commitment to video editing').optional(),
    mediaVeProjectsLink: z.string().trim().optional(),
    mediaVeComments: z.string().trim().optional(),

    // Media (Motion Graphics)
    mediaMgExciting: minAnswer(20, 'What excites you about Motion Graphics').optional(),
    mediaMgMixDesign: minAnswer(30, 'Enjoy mixing design with movement').optional(),
    mediaMgCreateAnimation: minAnswer(30, 'Short animation idea').optional(),
    mediaMgCuriousSide: minAnswer(30, 'Technical vs creative curiosity').optional(),
  })
  // ──────────────────────────────────────────────────────────────────────────
  // Conditional refinements: Enforce requirements based on selected track and circles
  // These ensure circle-specific fields are required and valid only when relevant
  // ──────────────────────────────────────────────────────────────────────────
  // Require technical circle if technical track is selected
  .refine(
    (data) => {
      if (data.track === 'Technical Only' || data.track === 'Both Non Technical & Technical') {
        return !!data.technicalCircle;
      }
      return true;
    },
    { message: 'Please select a technical circle', path: ['technicalCircle'] }
  )
  // Require non-technical circle if non-technical track is selected
  .refine(
    (data) => {
      if (data.track === 'Non-Technical Only' || data.track === 'Both Non Technical & Technical') {
        return !!data.nonTechnicalCircle;
      }
      return true;
    },
    { message: 'Please select a non-technical circle', path: ['nonTechnicalCircle'] }
  )
  // ──────────────────────────────────────────────────────────────────────────
  // Technical circles: Require all related fields if circle is selected
  // Since fields are optional in object, refine checks for presence
  // Lengths are already enforced by minAnswer schemas
  // ──────────────────────────────────────────────────────────────────────────
  // UI/UX
  .refine(
    (data) => {
      if (data.technicalCircle !== 'UIUX') return true;
      return !!data.uiuxMeaning && !!data.uiuxTools && !!data.uiuxDifference && !!data.uiuxPrinciples && !!data.uiuxResearch;
    },
    { message: 'All UI/UX questions are required when applying to UI/UX circle', path: ['uiuxMeaning'] }
  )
  // Frontend
  .refine(
    (data) => {
      if (data.technicalCircle !== 'Frontend') return true;
      return (
        !!data.frontendHtml &&
        !!data.frontendHeadingTag &&
        !!data.frontendCssColor &&
        !!data.frontendJsVars &&
        !!data.frontendReactComponents
      );
    },
    { message: 'All Frontend questions are required', path: ['frontendHtml'] }
  )
  // Backend
  .refine(
    (data) => {
      if (data.technicalCircle !== 'Backend') return true;
      return (
        !!data.backendClassObject &&
        !!data.backendDeleteTruncate &&
        !!data.backendSqlQuery &&
        !!data.backendInterfaceAbstract &&
        !!data.backendValueReference &&
        !!data.backendRest
      );
    },
    { message: 'All Backend questions are required', path: ['backendClassObject'] }
  )
  // Flutter
  .refine(
    (data) => {
      if (data.technicalCircle !== 'Flutter') return true;
      return (
        !!data.flutterWidget &&
        !!data.flutterState &&
        !!data.flutterMainDart &&
        !!data.flutterSyncAsync &&
        !!data.flutterStateManagement
      );
    },
    { message: 'All Flutter questions are required', path: ['flutterWidget'] }
  )
  // Data Science
  .refine(
    (data) => {
      if (data.technicalCircle !== 'Data Science') return true;
      return (
        !!data.dataScienceTopics &&
        !!data.dataScienceTime &&
        !!data.dataScienceTools &&
        !!data.dataSciencePythonLevel &&
        !!data.dataScienceProject
      );
    },
    { message: 'All Data Science questions are required', path: ['dataScienceTopics'] }
  )
  // CS - Computer Science
  .refine(
    (data) => {
      if (data.technicalCircle !== 'CS - Computer Science') return true;
      return !!data.csKeyword && !!data.csArrayIndex && !!data.csOopPrinciple && !!data.csStlContainer && !!data.csTimeComplexity;
    },
    { message: 'All CS questions must be answered', path: ['csKeyword'] }
  )
  // Business Analysis
  .refine(
    (data) => {
      if (data.technicalCircle !== 'Business Analysis') return true;
      return !!data.baRole && !!data.baDifference && !!data.baProject && !!data.baRequirements && !!data.baDiagrams;
    },
    { message: 'All Business Analysis questions are required', path: ['baRole'] }
  )
  // ──────────────────────────────────────────────────────────────────────────
  // Non-technical circles: Require all related fields if circle is selected
  // ──────────────────────────────────────────────────────────────────────────
  // HR - Human Resources
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'HR - Human Resources') return true;
      return (
        !!data.hrWhyJoin &&
        !!data.hrExperience &&
        !!data.hrHandleMember &&
        !!data.hrQualities &&
        !!data.hrActivity &&
        !!data.hrRoleDescription &&
        !!data.hrImportantRule &&
        !!data.hrPunctualityCommitment &&
        !!data.hrActiveParticipation &&
        !!data.hrTeamworkCollaboration &&
        !!data.hrTimeManagement &&
        !!data.hrPositivityMotivation &&
        !!data.hrResponsibilityOwnership &&
        !!data.hrFlexibilityAdaptability &&
        !!data.hrRespectRules &&
        !!data.hrSolveProblems
      );
    },
    { message: 'All HR questions and ratings are required', path: ['hrWhyJoin'] }
  )
  // PR&FR - Public Relations & Fundraising
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'PR&FR - Public Relations & Fundraising') return true;
      return (
        !!data.prfrWhyChoose &&
        !!data.prfrAddToCircle &&
        !!data.prfrSkillsAfterYear &&
        !!data.prfrConvinceOthers &&
        !!data.prfrSuddenTask &&
        !!data.prfrHoursPerWeek &&
        !!data.prfrAttendMeetings
      );
    },
    { message: 'All PR&FR questions are required', path: ['prfrWhyChoose'] }
  )
  // R&D - Research & Development
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'R&D - Research & Development') return true;
      return (
        !!data.rndKnowledge &&
        !!data.rndImportance &&
        !!data.rndLastBook &&
        !!data.rndDigitalContent &&
        !!data.rndDevelopSelf &&
        !!data.rndStayMotivated &&
        !!data.rndUnlimitedResources &&
        !!data.rndWordSkills &&
        !!data.rndSearchingSkills &&
        !!data.rndTimeManagement
      );
    },
    { message: 'All R&D questions and ratings are required', path: ['rndKnowledge'] }
  )
  // PM - Project Management
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'PM - Project Management') return true;
      return (
        !!data.pmCommunicationWay &&
        !!data.pmTeamLeaderFocus &&
        !!data.pmNewProblem &&
        !!data.pmChangesNormal &&
        !!data.pmConnectGoalTasks &&
        !!data.pmPersonalQuality &&
        !!data.pmTaskTool &&
        !!data.pmFixedFlexiblePlan &&
        !!data.pmManageTime &&
        !!data.pmPresentIdea
      );
    },
    { message: 'All PM questions are required', path: ['pmCommunicationWay'] }
  )
  // EO - Event Operations
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'EO - Event Operations') return true;
      return (
        !!data.eoKnowledge &&
        !!data.eoWhyChoose &&
        !!data.eoOfflineTimes &&
        !!data.eoUnderPressure &&
        !!data.eoNotPrefer &&
        !!data.eoTeamProblem
      );
    },
    { message: 'All EO questions are required', path: ['eoKnowledge'] }
  )
  // Media (Graphic Design)
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'Media (Graphic Design)') return true;
      return (
        !!data.mediaGdAboutSelf &&
        !!data.mediaGdInspiration &&
        !!data.mediaGdInterest &&
        !!data.mediaGdSocialExperience &&
        !!data.mediaGdSoftware &&
        !!data.mediaGdApproachProject &&
        !!data.mediaGdFeedback &&
        !!data.mediaGdTeamExperience &&
        !!data.mediaGdDeadlines &&
        !!data.mediaGdVagueInstructions &&
        !!data.mediaGdShortTimePost &&
        !!data.mediaGdDisagreeDesign
      );
    },
    { message: 'All Graphic Design questions are required', path: ['mediaGdAboutSelf'] }
  )
  // Media (Video Editing)
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'Media (Video Editing)') return true;
      return (
        !!data.mediaVeInterest &&
        !!data.mediaVeTriedEditing &&
        !!data.mediaVeHopeLearn &&
        !!data.mediaVeDeadlinePlan &&
        !!data.mediaVeDifferentIdea &&
        !!data.mediaVeTools &&
        !!data.mediaVePatience &&
        !!data.mediaVeHoursPerWeek
      );
    },
    { message: 'All Video Editing questions are required', path: ['mediaVeInterest'] }
  )
  // Media (Motion Graphics)
  .refine(
    (data) => {
      if (data.nonTechnicalCircle !== 'Media (Motion Graphics)') return true;
      return !!data.mediaMgExciting && !!data.mediaMgMixDesign && !!data.mediaMgCreateAnimation && !!data.mediaMgCuriousSide;
    },
    { message: 'All Motion Graphics questions are required', path: ['mediaMgExciting'] }
  );

// Infer the TypeScript type from the schema for type safety
export type ApplicationFormData = z.infer<typeof applicationSchema>;