import { z } from 'zod';

// ──────────────────────────────────────────────────────────────────────────────
// Common Patterns & Helpers
// ──────────────────────────────────────────────────────────────────────────────

const EGYPTIAN_PHONE_REGEX = /^(?:\+20|0)1[0125][0-9]{8}$/;

const createLengthConstrainedString = (min: number, max: number, field: string) =>
  z
    .string()
    .trim()
    .min(min, { message: `${field} must be at least ${min} characters` })
    .max(max, { message: `${field} cannot exceed ${max} characters` });

const longText = (min = 30, max = 2000, field: string) => createLengthConstrainedString(min, max, field);
const shortText = (min = 2, max = 500, field: string) => createLengthConstrainedString(min, max, field);

const requiredUrl = z
  .string()
  .trim()
  .min(1, { message: 'This field is required' })
  .url({ message: 'Please enter a valid URL' });

const rating1to5 = z.enum(['1', '2', '3', '4', '5'], {
  message: 'Please select a rating from 1 to 5',
});

// ──────────────────────────────────────────────────────────────────────────────
// Circle Configuration
// ──────────────────────────────────────────────────────────────────────────────

const technicalCircles = [
  'UIUX',
  'Frontend',
  'Backend',
  'Flutter',
  'Data Science',
  'CS - Computer Science',
  'Business Analysis',
] as const;
type TechnicalCircle = (typeof technicalCircles)[number];

const nonTechnicalCircles = [
  'HR - Human Resources',
  'PR&FR - Public Relations & Fundraising',
  'R&D - Research & Development',
  'PM - Project Management',
  'EO - Event Operations',
  'Media (Graphic Design)',
  'Media (Video Editing)',
  'Media (Motion Graphics)',
] as const;
type NonTechnicalCircle = (typeof nonTechnicalCircles)[number];

const technicalRequiredFields: Record<TechnicalCircle, string[]> = {
  UIUX: ['uiuxMeaning', 'uiuxTools', 'uiuxDifference', 'uiuxPrinciples', 'uiuxResearch'],
  Frontend: ['frontendHtml', 'frontendHeadingTag', 'frontendCssColor', 'frontendJsVars', 'frontendReactComponents'],
  Backend: ['backendClassObject', 'backendDeleteTruncate', 'backendSqlQuery', 'backendInterfaceAbstract', 'backendValueReference', 'backendRest'],
  Flutter: ['flutterWidget', 'flutterState', 'flutterMainDart', 'flutterSyncAsync', 'flutterStateManagement'],
  'Data Science': ['dataScienceTopics', 'dataScienceTime', 'dataScienceTools', 'dataSciencePythonLevel', 'dataScienceProject'],
  'CS - Computer Science': ['csKeyword', 'csArrayIndex', 'csOopPrinciple', 'csStlContainer', 'csTimeComplexity'],
  'Business Analysis': ['baRole', 'baDifference', 'baProject', 'baRequirements', 'baDiagrams'],
};

const nonTechnicalRequiredFields: Record<NonTechnicalCircle, string[]> = {
  'HR - Human Resources': [
    'hrWhyJoin',
    'hrExperience',
    'hrHandleMember',
    'hrQualities',
    'hrActivity',
    'hrRoleDescription',
    'hrImportantRule',
    'hrPunctualityCommitment',
    'hrActiveParticipation',
    'hrTeamworkCollaboration',
    'hrTimeManagement',
    'hrPositivityMotivation',
    'hrResponsibilityOwnership',
    'hrFlexibilityAdaptability',
    'hrRespectRules',
    'hrSolveProblems',
  ],
  'PR&FR - Public Relations & Fundraising': [
    'prfrWhyChoose',
    'prfrAddToCircle',
    'prfrSkillsAfterYear',
    'prfrConvinceOthers',
    'prfrSuddenTask',
    'prfrHoursPerWeek',
    'prfrAttendMeetings',
  ],
  'R&D - Research & Development': [
    'rndKnowledge',
    'rndImportance',
    'rndLastBook',
    'rndDigitalContent',
    'rndDevelopSelf',
    'rndStayMotivated',
    'rndUnlimitedResources',
    'rndWordSkills',
    'rndSearchingSkills',
    'rndTimeManagement',
  ],
  'PM - Project Management': [
    'pmCommunicationWay',
    'pmTeamLeaderFocus',
    'pmNewProblem',
    'pmChangesNormal',
    'pmConnectGoalTasks',
    'pmPersonalQuality',
    'pmTaskTool',
    'pmFixedFlexiblePlan',
    'pmManageTime',
    'pmPresentIdea',
  ],
  'EO - Event Operations': ['eoKnowledge', 'eoWhyChoose', 'eoOfflineTimes', 'eoUnderPressure', 'eoNotPrefer', 'eoTeamProblem'],
  'Media (Graphic Design)': [
    'mediaGdAboutSelf',
    'mediaGdInspiration',
    'mediaGdInterest',
    'mediaGdSocialExperience',
    'mediaGdSoftware',
    'mediaGdApproachProject',
    'mediaGdFeedback',
    'mediaGdTeamExperience',
    'mediaGdDeadlines',
    'mediaGdVagueInstructions',
    'mediaGdShortTimePost',
    'mediaGdDisagreeDesign',
  ],
  'Media (Video Editing)': [
    'mediaVeInterest',
    'mediaVeTriedEditing',
    'mediaVeHopeLearn',
    'mediaVeDeadlinePlan',
    'mediaVeDifferentIdea',
    'mediaVeTools',
    'mediaVePatience',
    'mediaVeHoursPerWeek',
    'mediaVeProjectsLink',
    'mediaVeComments',
  ],
  'Media (Motion Graphics)': ['mediaMgExciting', 'mediaMgMixDesign', 'mediaMgCreateAnimation', 'mediaMgCuriousSide'],
};

const technicalMinLengths: Partial<Record<keyof ApplicationFormData, number>> = {
  uiuxMeaning: 20,
  uiuxTools: 10,
  uiuxDifference: 30,
  uiuxPrinciples: 20,
  uiuxResearch: 30,
  frontendHtml: 30,
  frontendHeadingTag: 5,
  frontendCssColor: 20,
  frontendJsVars: 40,
  frontendReactComponents: 40,
  backendClassObject: 30,
  backendDeleteTruncate: 30,
  backendSqlQuery: 10,
  backendInterfaceAbstract: 40,
  backendValueReference: 40,
  backendRest: 40,
  flutterWidget: 40,
  flutterState: 40,
  flutterMainDart: 30,
  flutterSyncAsync: 30,
  flutterStateManagement: 40,
  dataScienceTopics: 30,
  dataScienceTime: 20,
  dataScienceTools: 10,
  dataSciencePythonLevel: 20,
  dataScienceProject: 50,
  csKeyword: 5,
  csArrayIndex: 5,
  csOopPrinciple: 30,
  csStlContainer: 20,
  csTimeComplexity: 30,
  baRole: 40,
  baDifference: 50,
  baProject: 50,
  baRequirements: 50,
  baDiagrams: 40,
};

const nonTechnicalMinLengths: Partial<Record<keyof ApplicationFormData, number>> = {
  hrWhyJoin: 50,
  hrExperience: 40,
  hrHandleMember: 50,
  hrQualities: 40,
  hrActivity: 50,
  hrRoleDescription: 40,
  hrImportantRule: 40,
  prfrWhyChoose: 50,
  prfrAddToCircle: 40,
  prfrSkillsAfterYear: 40,
  prfrConvinceOthers: 40,
  prfrSuddenTask: 40,
  prfrHoursPerWeek: 10,
  prfrAttendMeetings: 20,
  rndKnowledge: 50,
  rndImportance: 40,
  rndLastBook: 40,
  rndDigitalContent: 30,
  rndDevelopSelf: 40,
  rndStayMotivated: 40,
  rndUnlimitedResources: 40,
  pmCommunicationWay: 1,
  pmTeamLeaderFocus: 40,
  pmNewProblem: 40,
  pmChangesNormal: 40,
  pmConnectGoalTasks: 40,
  pmPersonalQuality: 30,
  pmTaskTool: 20,
  pmFixedFlexiblePlan: 40,
  pmManageTime: 40,
  pmPresentIdea: 40,
  eoKnowledge: 40,
  eoWhyChoose: 40,
  eoOfflineTimes: 20,
  eoUnderPressure: 40,
  eoNotPrefer: 30,
  eoTeamProblem: 40,
  mediaGdAboutSelf: 40,
  mediaGdInspiration: 40,
  mediaGdInterest: 40,
  mediaGdSocialExperience: 30,
  mediaGdSoftware: 20,
  mediaGdApproachProject: 40,
  mediaGdFeedback: 30,
  mediaGdTeamExperience: 30,
  mediaGdDeadlines: 30,
  mediaGdVagueInstructions: 30,
  mediaGdShortTimePost: 30,
  mediaGdDisagreeDesign: 30,
  mediaVeInterest: 40,
  mediaVeTriedEditing: 30,
  mediaVeHopeLearn: 30,
  mediaVeDeadlinePlan: 30,
  mediaVeDifferentIdea: 30,
  mediaVeTools: 20,
  mediaVePatience: 30,
  mediaVeHoursPerWeek: 10,
  mediaVeProjectsLink: 10,
  mediaVeComments: 20,
  mediaMgExciting: 40,
  mediaMgMixDesign: 40,
  mediaMgCreateAnimation: 40,
  mediaMgCuriousSide: 40,
};

// ──────────────────────────────────────────────────────────────────────────────
// Base Schema
// ──────────────────────────────────────────────────────────────────────────────

const baseSchema = z.object({
  // ── Personal & Contact ─────────────────────────────────────────────────────
  fullName: shortText(3, 120, 'Full name'),
  email: z.string().trim().email({ message: 'Please enter a valid email address' }).max(160),
  phoneNumber: z.string().trim().regex(EGYPTIAN_PHONE_REGEX, {
    message: 'Please enter a valid Egyptian mobile number (e.g. 01234567890 or +201234567890)',
  }),
  facebookLink: requiredUrl,
  discordUsername: z.string().trim().min(1, 'This field is required').max(64).optional(),
  linkedInLink: requiredUrl,
  gitHubLink: requiredUrl,

  // ── Education & Location ───────────────────────────────────────────────────
  university: shortText(2, 120, 'University').optional(),
  college: shortText(2, 120, 'College').optional(),
  academicYear: z.enum([
    'LVL 000 (for Engineering Students)',
    'First Year',
    'Second Year',
    'Third Year',
    'Fourth Year',
  ]).optional(),
  location: shortText(2, 120, 'Location').optional(),

  // ── Motivational & Behavioral Questions ────────────────────────────────────
  whyJoinMEGA: longText(50, 1800, 'Why join MEGA'),
  hopeToAchieve: longText(40, 1500, 'What hope to achieve'),
  projectsInterest: longText(40, 1200, 'Projects interest'),
  strengthsWeakness: longText(60, 1400, 'Strengths and weakness'),
  proudAchievement: longText(50, 1200, 'Proud achievement'),
  softSkills: longText(50, 1400, 'Soft skills & experiences'),
  balanceTime: longText(40, 1000, 'Balance time'),
  teamMotivation: longText(50, 1200, 'Team motivation / demotivation'),
  handleFeedback: longText(40, 1000, 'Handle feedback'),
  neededHelp: longText(60, 1200, 'Needed help situation'),
  teamChallenge: longText(70, 1400, 'Team challenge experience'),
  newSkills: longText(40, 1000, 'New skills to gain'),
  describeYourself: longText(20, 400, 'Describe yourself in three words'),
  hoursPerWeek: z.string().trim().min(1, 'Please enter hours per week').regex(/^\d+$/, 'Must be a whole number'),

  // ── General Self-Assessment Ratings ────────────────────────────────────────
  commitmentOrganization: rating1to5.optional(),
  acceptanceFeedback: rating1to5.optional(),
  nervousnessShortTemper: rating1to5.optional(),
  followUpContinuity: rating1to5.optional(),
  emotionalStability: rating1to5.optional(),
  communication: rating1to5.optional(),

  // ── Track & Circle Selection ──────────────────────────────────────────────
  track: z.enum(['Technical Only', 'Non-Technical Only', 'Both'], {
    message: 'Please select a track',
  }),
  technicalCircle: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.enum(technicalCircles)
  ).optional(),
  nonTechnicalCircle: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.enum(nonTechnicalCircles)
  ).optional(),

  // ── Circle-specific fields (all optional at base level) ────────────────────
  // Technical
  uiuxMeaning: z.string().optional(),
  uiuxTools: z.string().optional(),
  uiuxDifference: z.string().optional(),
  uiuxPrinciples: z.string().optional(),
  uiuxResearch: z.string().optional(),
  frontendHtml: z.string().optional(),
  frontendHeadingTag: z.string().optional(),
  frontendCssColor: z.string().optional(),
  frontendJsVars: z.string().optional(),
  frontendReactComponents: z.string().optional(),
  backendClassObject: z.string().optional(),
  backendDeleteTruncate: z.string().optional(),
  backendSqlQuery: z.string().optional(),
  backendInterfaceAbstract: z.string().optional(),
  backendValueReference: z.string().optional(),
  backendRest: z.string().optional(),
  flutterWidget: z.string().optional(),
  flutterState: z.string().optional(),
  flutterMainDart: z.string().optional(),
  flutterSyncAsync: z.string().optional(),
  flutterStateManagement: z.string().optional(),
  dataScienceTopics: z.string().optional(),
  dataScienceTime: z.string().optional(),
  dataScienceTools: z.string().optional(),
  dataSciencePythonLevel: z.string().optional(),
  dataScienceProject: z.string().optional(),
  csKeyword: z.string().optional(),
  csArrayIndex: z.string().optional(),
  csOopPrinciple: z.string().optional(),
  csStlContainer: z.string().optional(),
  csTimeComplexity: z.string().optional(),
  baRole: z.string().optional(),
  baDifference: z.string().optional(),
  baProject: z.string().optional(),
  baRequirements: z.string().optional(),
  baDiagrams: z.string().optional(),
  // Non-technical (text + ratings)
  hrWhyJoin: z.string().optional(),
  hrExperience: z.string().optional(),
  hrHandleMember: z.string().optional(),
  hrQualities: z.string().optional(),
  hrActivity: z.string().optional(),
  hrRoleDescription: z.string().optional(),
  hrImportantRule: z.string().optional(),
  hrPunctualityCommitment: rating1to5.optional(),
  hrActiveParticipation: rating1to5.optional(),
  hrTeamworkCollaboration: rating1to5.optional(),
  hrTimeManagement: rating1to5.optional(),
  hrPositivityMotivation: rating1to5.optional(),
  hrResponsibilityOwnership: rating1to5.optional(),
  hrFlexibilityAdaptability: rating1to5.optional(),
  hrRespectRules: rating1to5.optional(),
  hrSolveProblems: rating1to5.optional(),
  prfrWhyChoose: z.string().optional(),
  prfrAddToCircle: z.string().optional(),
  prfrSkillsAfterYear: z.string().optional(),
  prfrConvinceOthers: z.string().optional(),
  prfrSuddenTask: z.string().optional(),
  prfrHoursPerWeek: z.string().optional(),
  prfrAttendMeetings: z.string().optional(),
  rndKnowledge: z.string().optional(),
  rndImportance: z.string().optional(),
  rndLastBook: z.string().optional(),
  rndDigitalContent: z.string().optional(),
  rndDevelopSelf: z.string().optional(),
  rndStayMotivated: z.string().optional(),
  rndUnlimitedResources: z.string().optional(),
  rndWordSkills: rating1to5.optional(),
  rndSearchingSkills: rating1to5.optional(),
  rndTimeManagement: rating1to5.optional(),
  pmCommunicationWay: z.string().optional(),
  pmTeamLeaderFocus: z.string().optional(),
  pmNewProblem: z.string().optional(),
  pmChangesNormal: z.string().optional(),
  pmConnectGoalTasks: z.string().optional(),
  pmPersonalQuality: z.string().optional(),
  pmTaskTool: z.string().optional(),
  pmFixedFlexiblePlan: z.string().optional(),
  pmManageTime: z.string().optional(),
  pmPresentIdea: z.string().optional(),
  eoKnowledge: z.string().optional(),
  eoWhyChoose: z.string().optional(),
  eoOfflineTimes: z.string().optional(),
  eoUnderPressure: z.string().optional(),
  eoNotPrefer: z.string().optional(),
  eoTeamProblem: z.string().optional(),
  mediaGdAboutSelf: z.string().optional(),
  mediaGdInspiration: z.string().optional(),
  mediaGdInterest: z.string().optional(),
  mediaGdSocialExperience: z.string().optional(),
  mediaGdSoftware: z.string().optional(),
  mediaGdApproachProject: z.string().optional(),
  mediaGdFeedback: z.string().optional(),
  mediaGdTeamExperience: z.string().optional(),
  mediaGdDeadlines: z.string().optional(),
  mediaGdVagueInstructions: z.string().optional(),
  mediaGdShortTimePost: z.string().optional(),
  mediaGdDisagreeDesign: z.string().optional(),
  mediaVeInterest: z.string().optional(),
  mediaVeTriedEditing: z.string().optional(),
  mediaVeHopeLearn: z.string().optional(),
  mediaVeDeadlinePlan: z.string().optional(),
  mediaVeDifferentIdea: z.string().optional(),
  mediaVeTools: z.string().optional(),
  mediaVePatience: z.string().optional(),
  mediaVeHoursPerWeek: z.string().optional(),
  mediaVeProjectsLink: z.string().optional(),
  mediaVeComments: z.string().optional(),
  mediaMgExciting: z.string().optional(),
  mediaMgMixDesign: z.string().optional(),
  mediaMgCreateAnimation: z.string().optional(),
  mediaMgCuriousSide: z.string().optional(),
});

// ──────────────────────────────────────────────────────────────────────────────
// Final Schema with Conditional Validation
// ──────────────────────────────────────────────────────────────────────────────

export const applicationSchema = baseSchema.superRefine((data, ctx) => {
  // ── Track → Circle Requirement Validation ──────────────────────────────────
  if (data.track === 'Technical Only' && !data.technicalCircle) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please select a technical circle when applying for Technical Only',
      path: ['technicalCircle'],
    });
  }
  if (data.track === 'Non-Technical Only' && !data.nonTechnicalCircle) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please select a non-technical circle when applying for Non-Technical Only',
      path: ['nonTechnicalCircle'],
    });
  }
  if (data.track === 'Both') {
    if (!data.technicalCircle) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select a technical circle when applying for Both tracks',
        path: ['technicalCircle'],
      });
    }
    if (!data.nonTechnicalCircle) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select a non-technical circle when applying for Both tracks',
        path: ['nonTechnicalCircle'],
      });
    }
  }

  // ── Helper to validate required fields for a selected circle ───────────────
  const validateCircle = <T extends string>(
    circle: T | undefined,
    requiredFields: Record<T, string[]>,
    minLengths: Partial<Record<keyof ApplicationFormData, number>>
  ) => {
    if (!circle) return;
    const fields = requiredFields[circle];
    if (!fields) return;
    fields.forEach((field) => {
      const raw = data[field as keyof typeof data];
      const value = typeof raw === 'string' ? raw.trim() : '';
      // Required check
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `This field is required for ${circle}`,
          path: [field],
        });
        return;
      }
      const minLength = minLengths[field as keyof ApplicationFormData];
      if (minLength !== undefined) {
        // Text field length check
        if (value.length < minLength) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Must be at least ${minLength} characters for ${circle}`,
            path: [field],
          });
        }
      } else if (!['1', '2', '3', '4', '5'].includes(value)) {
        // Rating fields validation (no min length → must be valid 1-5)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please select a rating from 1 to 5',
          path: [field],
        });
      }
    });
  };

  // Apply validation to selected circles
  validateCircle(data.technicalCircle, technicalRequiredFields, technicalMinLengths);
  validateCircle(data.nonTechnicalCircle, nonTechnicalRequiredFields, nonTechnicalMinLengths);
});

// ──────────────────────────────────────────────────────────────────────────────
// Export inferred type for type-safety across the application
// ──────────────────────────────────────────────────────────────────────────────

export type ApplicationFormData = z.infer<typeof applicationSchema>;