// questionnaire-design-certificate.ts

export const questionnaireDesignCertificate = {
  // COURSE METADATA & IDENTIFICATION
  id: "questionnaire-design-certificate",
  title: "Questionnaire Design (Certificate)",
  description: "Learn to create effective questionnaires that gather accurate, useful data for research and business decisions. Master question wording, structure, and flow.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📝",
  badge: "Certificate",
  prerequisites: [],
  learningOutcomes: [
    "Design clear and unbiased questions",
    "Structure questionnaires for optimal flow",
    "Choose appropriate question types",
    "Test and improve your questionnaires",
    "Avoid common design mistakes"
  ],

  // MODULE ARCHITECTURE - 6 COMPREHENSIVE MODULES
  modules: [
    {
      id: 1,
      title: "Foundations of Questionnaire Design",
      content: `
## Understanding Questionnaires

A questionnaire is a research instrument consisting of a series of questions designed to gather information from respondents. Unlike casual conversations, questionnaires follow specific design principles to ensure the data collected is reliable and valid.

### The Purpose of Questionnaires

Questionnaires serve multiple purposes in different fields:
- **Market Research**: Understanding customer preferences and behaviors
- **Academic Research**: Collecting data for scientific studies
- **Employee Feedback**: Measuring workplace satisfaction
- **Customer Satisfaction**: Assessing service quality
- **Health Assessments**: Gathering medical and lifestyle information

### Key Design Principles

Three fundamental principles guide good questionnaire design:
1. **Clarity**: Questions must be easy to understand
2. **Brevity**: Keep questions and the overall survey short
3. **Relevance**: Every question should serve a purpose

### The Design Process

Creating a good questionnaire involves five main steps:
1. **Define Objectives**: What do you want to learn?
2. **Identify Audience**: Who will answer your questions?
3. **Design Questions**: Create clear, unbiased questions
4. **Structure Flow**: Organize questions logically
5. **Test and Revise**: Pilot test before full deployment

Remember: A well-designed questionnaire respects the respondent's time while gathering the information you need.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of a questionnaire?",
          options: [
            "To have conversations with people",
            "To gather information from respondents",
            "To entertain survey takers",
            "To test computer systems"
          ],
          correctAnswer: 1,
          explanation: "Questionnaires are research instruments designed specifically to gather information from respondents in a structured way."
        },
        {
          id: 2,
          question: "Which field uses questionnaires to understand customer preferences?",
          options: [
            "Market Research",
            "Astronomy",
            "Civil Engineering",
            "Music Theory"
          ],
          correctAnswer: 0,
          explanation: "Market research frequently uses questionnaires to understand customer preferences, buying behaviors, and satisfaction levels."
        },
        {
          id: 3,
          question: "What is the first principle of good questionnaire design?",
          options: [
            "Complexity",
            "Length",
            "Clarity",
            "Color"
          ],
          correctAnswer: 2,
          explanation: "Clarity is fundamental - questions must be easy for all respondents to understand regardless of their background."
        },
        {
          id: 4,
          question: "Which principle emphasizes keeping the survey short?",
          options: [
            "Clarity",
            "Brevity",
            "Relevance",
            "Complexity"
          ],
          correctAnswer: 1,
          explanation: "Brevity ensures respondents don't abandon the questionnaire due to its length, leading to better completion rates."
        },
        {
          id: 5,
          question: "How many main steps are in the questionnaire design process?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Ten"
          ],
          correctAnswer: 1,
          explanation: "The design process has five main steps: define objectives, identify audience, design questions, structure flow, and test/revise."
        },
        {
          id: 6,
          question: "What should every question in a questionnaire serve?",
          options: [
            "Multiple purposes",
            "A purpose",
            "No particular purpose",
            "Entertainment value"
          ],
          correctAnswer: 1,
          explanation: "The principle of relevance means every question should serve a specific purpose and contribute to your research objectives."
        },
        {
          id: 7,
          question: "Which step involves determining who will answer your questions?",
          options: [
            "Define Objectives",
            "Identify Audience",
            "Design Questions",
            "Test and Revise"
          ],
          correctAnswer: 1,
          explanation: "Identifying your audience is crucial because question design and wording should be appropriate for your specific respondents."
        },
        {
          id: 8,
          question: "What type of research uses questionnaires for scientific studies?",
          options: [
            "Academic Research",
            "Market Research",
            "Employee Feedback",
            "Health Assessments"
          ],
          correctAnswer: 0,
          explanation: "Academic research relies on questionnaires to collect data for scientific studies across various disciplines."
        },
        {
          id: 9,
          question: "What should a well-designed questionnaire respect?",
          options: [
            "Only the researcher's time",
            "The respondent's time",
            "Government regulations",
            "Computer processing time"
          ],
          correctAnswer: 1,
          explanation: "Respecting respondents' time increases completion rates and improves the quality of responses you receive."
        },
        {
          id: 10,
          question: "Which of these is NOT a key design principle?",
          options: [
            "Clarity",
            "Brevity",
            "Relevance",
            "Complexity"
          ],
          correctAnswer: 3,
          explanation: "Complexity is actually something to avoid in questionnaire design, as it confuses respondents and reduces data quality."
        },
        {
          id: 11,
          question: "What comes after designing questions in the process?",
          options: [
            "Define Objectives",
            "Identify Audience",
            "Structure Flow",
            "Test and Revise"
          ],
          correctAnswer: 2,
          explanation: "After designing individual questions, you need to structure their flow to create a logical progression for respondents."
        },
        {
          id: 12,
          question: "Which application uses questionnaires for workplace satisfaction?",
          options: [
            "Employee Feedback",
            "Market Research",
            "Customer Satisfaction",
            "Health Assessments"
          ],
          correctAnswer: 0,
          explanation: "Employee feedback surveys measure workplace satisfaction, engagement, and organizational climate."
        },
        {
          id: 13,
          question: "What is the final step in questionnaire design?",
          options: [
            "Define Objectives",
            "Identify Audience",
            "Design Questions",
            "Test and Revise"
          ],
          correctAnswer: 3,
          explanation: "Testing and revising through pilot studies helps identify problems before full deployment."
        },
        {
          id: 14,
          question: "What type of assessments gather medical information?",
          options: [
            "Health Assessments",
            "Market Research",
            "Academic Research",
            "Employee Feedback"
          ],
          correctAnswer: 0,
          explanation: "Health assessments use questionnaires to collect medical history, symptoms, and lifestyle information."
        },
        {
          id: 15,
          question: "How many purposes of questionnaires were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five purposes were listed: market research, academic research, employee feedback, customer satisfaction, and health assessments."
        },
        {
          id: 16,
          question: "What should you do before full questionnaire deployment?",
          options: [
            "Print thousands of copies",
            "Pilot test",
            "Change all questions",
            "Add more questions"
          ],
          correctAnswer: 1,
          explanation: "Pilot testing with a small group helps identify confusing questions, technical issues, or flow problems."
        },
        {
          id: 17,
          question: "Which principle ensures questions contribute to research goals?",
          options: [
            "Clarity",
            "Brevity",
            "Relevance",
            "All of the above"
          ],
          correctAnswer: 2,
          explanation: "Relevance ensures each question directly contributes to your research objectives and isn't just included randomly."
        },
        {
          id: 18,
          question: "What do questionnaires assess in service industries?",
          options: [
            "Customer Satisfaction",
            "Employee Feedback",
            "Academic Research",
            "Market Research"
          ],
          correctAnswer: 0,
          explanation: "Customer satisfaction surveys help service providers understand and improve their service quality."
        },
        {
          id: 19,
          question: "What is the opposite of good questionnaire design?",
          options: [
            "Following the five steps",
            "Ignoring the three principles",
            "Respecting respondent time",
            "Having clear objectives"
          ],
          correctAnswer: 1,
          explanation: "Ignoring the principles of clarity, brevity, and relevance leads to poor questionnaire design and unreliable data."
        },
        {
          id: 20,
          question: "How many fundamental principles guide questionnaire design?",
          options: [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "Three fundamental principles guide good questionnaire design: clarity, brevity, and relevance."
        }
      ]
    },
    {
      id: 2,
      title: "Question Types and Formats",
      content: `
## Types of Questions

Different question types serve different purposes and yield different types of data. Choosing the right question type is crucial for getting the information you need.

### Closed-Ended Questions

Closed-ended questions provide predefined response options:
- **Multiple Choice**: Select one from several options
- **Checkboxes**: Select all that apply from a list
- **Rating Scales**: Rate on a numerical scale (e.g., 1-5)
- **Likert Scales**: Measure agreement (Strongly Agree to Strongly Disagree)
- **Ranking**: Order items by preference or importance

### Open-Ended Questions

Open-ended questions allow free-form responses:
- **Short Answer**: Brief responses (one or two sentences)
- **Essay Questions**: Detailed, longer responses
- **Comment Boxes**: Optional additional comments
- **Fill-in-the-Blank**: Complete a statement

### Specialized Question Types

Some questions serve specific purposes:
- **Demographic Questions**: Age, gender, education, income
- **Screening Questions**: Determine if respondent qualifies
- **Filter Questions**: Route respondents to appropriate sections
- **Matrix Questions**: Multiple questions with same response scale

### Choosing Question Formats

Select formats based on your needs:
1. **For quantitative analysis**: Use closed-ended questions
2. **For depth and detail**: Use open-ended questions
3. **For efficiency**: Use rating scales and multiple choice
4. **For context**: Mix closed and open-ended questions

Remember: The question format affects how you can analyze the data and what insights you can gain.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of question provides predefined response options?",
          options: [
            "Open-Ended Questions",
            "Closed-Ended Questions",
            "Essay Questions",
            "Comment Boxes"
          ],
          correctAnswer: 1,
          explanation: "Closed-ended questions limit responses to predefined options, making them easier to analyze quantitatively."
        },
        {
          id: 2,
          question: "Which question type allows selecting only one option?",
          options: [
            "Checkboxes",
            "Multiple Choice",
            "Rating Scales",
            "Essay Questions"
          ],
          correctAnswer: 1,
          explanation: "Multiple choice questions require selecting exactly one option from several possibilities."
        },
        {
          id: 3,
          question: "What do Likert Scales typically measure?",
          options: [
            "Color preferences",
            "Age ranges",
            "Agreement levels",
            "Income levels"
          ],
          correctAnswer: 2,
          explanation: "Likert Scales measure levels of agreement, typically from Strongly Agree to Strongly Disagree."
        },
        {
          id: 4,
          question: "Which question type allows selecting all that apply?",
          options: [
            "Multiple Choice",
            "Checkboxes",
            "Rating Scales",
            "Ranking"
          ],
          correctAnswer: 1,
          explanation: "Checkbox questions allow respondents to select multiple options that apply to them."
        },
        {
          id: 5,
          question: "What type of questions allow free-form responses?",
          options: [
            "Closed-Ended Questions",
            "Multiple Choice",
            "Open-Ended Questions",
            "Rating Scales"
          ],
          correctAnswer: 2,
          explanation: "Open-ended questions allow respondents to answer in their own words without predefined options."
        },
        {
          id: 6,
          question: "Which is an example of an open-ended question?",
          options: [
            "Multiple Choice",
            "Essay Questions",
            "Checkboxes",
            "Rating Scales"
          ],
          correctAnswer: 1,
          explanation: "Essay questions are open-ended, allowing detailed responses in the respondent's own words."
        },
        {
          id: 7,
          question: "What do demographic questions typically ask about?",
          options: [
            "Opinions",
            "Preferences",
            "Age and gender",
            "Agreement levels"
          ],
          correctAnswer: 2,
          explanation: "Demographic questions collect background information like age, gender, education, and income."
        },
        {
          id: 8,
          question: "What type of scale uses numbers like 1-5?",
          options: [
            "Likert Scales",
            "Rating Scales",
            "Multiple Choice",
            "Checkboxes"
          ],
          correctAnswer: 1,
          explanation: "Rating scales use numerical values (e.g., 1-5 or 1-10) to rate something quantitatively."
        },
        {
          id: 9,
          question: "Which question type orders items by preference?",
          options: [
            "Multiple Choice",
            "Checkboxes",
            "Ranking",
            "Short Answer"
          ],
          correctAnswer: 2,
          explanation: "Ranking questions ask respondents to order items based on preference, importance, or frequency."
        },
        {
          id: 10,
          question: "What determines if a respondent qualifies for your survey?",
          options: [
            "Demographic Questions",
            "Screening Questions",
            "Filter Questions",
            "Matrix Questions"
          ],
          correctAnswer: 1,
          explanation: "Screening questions determine if respondents meet the criteria to participate in your study."
        },
        {
          id: 11,
          question: "Which question type routes respondents to different sections?",
          options: [
            "Screening Questions",
            "Filter Questions",
            "Demographic Questions",
            "Open-Ended Questions"
          ],
          correctAnswer: 1,
          explanation: "Filter questions (or skip logic) route respondents to different questions based on their answers."
        },
        {
          id: 12,
          question: "What combines multiple questions with the same response scale?",
          options: [
            "Matrix Questions",
            "Multiple Choice",
            "Checkboxes",
            "Essay Questions"
          ],
          correctAnswer: 0,
          explanation: "Matrix questions present several questions together with the same set of response options."
        },
        {
          id: 13,
          question: "Which format is best for quantitative analysis?",
          options: [
            "Open-Ended Questions",
            "Closed-Ended Questions",
            "Essay Questions",
            "Comment Boxes"
          ],
          correctAnswer: 1,
          explanation: "Closed-ended questions produce structured data that's easier to analyze with statistical methods."
        },
        {
          id: 14,
          question: "What type of question provides the most depth and detail?",
          options: [
            "Multiple Choice",
            "Rating Scales",
            "Open-Ended Questions",
            "Checkboxes"
          ],
          correctAnswer: 2,
          explanation: "Open-ended questions allow respondents to provide detailed, nuanced responses in their own words."
        },
        {
          id: 15,
          question: "Which is a brief open-ended response format?",
          options: [
            "Essay Questions",
            "Short Answer",
            "Multiple Choice",
            "Rating Scales"
          ],
          correctAnswer: 1,
          explanation: "Short answer questions expect brief responses, typically one or two sentences."
        },
        {
          id: 16,
          question: "What do comment boxes typically provide?",
          options: [
            "Required detailed answers",
            "Optional additional comments",
            "Demographic information",
            "Screening information"
          ],
          correctAnswer: 1,
          explanation: "Comment boxes are usually optional and allow respondents to add additional thoughts or clarifications."
        },
        {
          id: 17,
          question: "Which question type asks respondents to complete a statement?",
          options: [
            "Multiple Choice",
            "Fill-in-the-Blank",
            "Rating Scales",
            "Checkboxes"
          ],
          correctAnswer: 1,
          explanation: "Fill-in-the-blank questions present an incomplete statement that respondents complete."
        },
        {
          id: 18,
          question: "How many specialized question types were mentioned?",
          options: [
            "Two",
            "Four",
            "Six",
            "Eight"
          ],
          correctAnswer: 1,
          explanation: "Four specialized types were mentioned: demographic, screening, filter, and matrix questions."
        },
        {
          id: 19,
          question: "What is the main advantage of closed-ended questions?",
          options: [
            "They provide depth",
            "They are efficient to analyze",
            "They allow creative responses",
            "They require no coding"
          ],
          correctAnswer: 1,
          explanation: "Closed-ended questions are efficient to analyze because responses are already categorized."
        },
        {
          id: 20,
          question: "Which format should you use for efficiency?",
          options: [
            "Essay Questions",
            "Rating Scales",
            "Comment Boxes",
            "Fill-in-the-Blank"
          ],
          correctAnswer: 1,
          explanation: "Rating scales and multiple choice questions are efficient for both respondents and researchers."
        }
      ]
    },
    {
      id: 3,
      title: "Writing Clear Questions",
      content: `
## Crafting Effective Questions

The wording of your questions significantly affects the quality of responses you receive. Poorly worded questions lead to confusion, bias, and unreliable data.

### Common Question Problems

Avoid these common pitfalls in question writing:
- **Double-Barreled Questions**: Asking two things at once
- **Leading Questions**: Suggesting a particular answer
- **Ambiguous Questions**: Unclear or vague wording
- **Jargon and Technical Terms**: Language respondents don't understand
- **Negative Phrasing**: Using "not" or "never" which can confuse

### Principles of Clear Question Writing

Follow these principles for clear questions:
1. **Use Simple Language**: Write at an 8th-grade reading level
2. **Be Specific**: Avoid vague terms like "often" or "sometimes"
3. **Keep It Brief**: One idea per question, under 20 words
4. **Use Positive Phrasing**: Frame questions positively when possible
5. **Provide Clear Instructions**: Tell respondents exactly what to do

### Testing Question Clarity

Methods to ensure your questions are clear:
- **Peer Review**: Have colleagues review your questions
- **Cognitive Interviews**: Ask people to think aloud as they answer
- **Pilot Testing**: Test with a small sample from your target population
- **Expert Review**: Consult with survey methodology experts

### Question Structure Guidelines

Structure questions for maximum clarity:
- **Start with the topic**: Put the main subject at the beginning
- **Use complete sentences**: Avoid sentence fragments
- **Include all necessary information**: Don't assume prior knowledge
- **Place important words early**: Put key terms near the beginning

Remember: If respondents don't understand your questions, their answers won't be meaningful.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of question asks two things at once?",
          options: [
            "Leading Question",
            "Double-Barreled Question",
            "Ambiguous Question",
            "Clear Question"
          ],
          correctAnswer: 1,
          explanation: "Double-barreled questions combine two questions into one, making it impossible to know which part respondents are answering."
        },
        {
          id: 2,
          question: "What suggests a particular answer to respondents?",
          options: [
            "Clear Question",
            "Leading Question",
            "Specific Question",
            "Brief Question"
          ],
          correctAnswer: 1,
          explanation: "Leading questions suggest or imply what answer the researcher expects or prefers."
        },
        {
          id: 3,
          question: "What reading level should questionnaire questions target?",
          options: [
            "College level",
            "12th grade level",
            "8th grade level",
            "5th grade level"
          ],
          correctAnswer: 2,
          explanation: "Questions should be written at an 8th-grade reading level to ensure wide understanding."
        },
        {
          id: 4,
          question: "Which of these is a vague term to avoid?",
          options: [
            "Monthly",
            "Weekly",
            "Often",
            "Daily"
          ],
          correctAnswer: 2,
          explanation: "Terms like 'often' are vague because different people interpret them differently."
        },
        {
          id: 5,
          question: "How many ideas should each question contain?",
          options: [
            "As many as possible",
            "Two or three",
            "Exactly one",
            "It doesn't matter"
          ],
          correctAnswer: 2,
          explanation: "Each question should contain exactly one idea to avoid confusion and ensure clear responses."
        },
        {
          id: 6,
          question: "What is a good maximum word count for a question?",
          options: [
            "50 words",
            "40 words",
            "30 words",
            "20 words"
          ],
          correctAnswer: 3,
          explanation: "Keeping questions under 20 words helps maintain clarity and reduces cognitive load on respondents."
        },
        {
          id: 7,
          question: "Which phrasing should you generally use?",
          options: [
            "Negative Phrasing",
            "Complex Phrasing",
            "Positive Phrasing",
            "Technical Phrasing"
          ],
          correctAnswer: 2,
          explanation: "Positive phrasing is usually clearer and less confusing than negative phrasing."
        },
        {
          id: 8,
          question: "What should you tell respondents exactly what to do?",
          options: [
            "Clear Instructions",
            "Vague Guidelines",
            "No Instructions",
            "Complex Directions"
          ],
          correctAnswer: 0,
          explanation: "Clear instructions help respondents understand exactly how to answer each question."
        },
        {
          id: 9,
          question: "What method involves having colleagues review questions?",
          options: [
            "Pilot Testing",
            "Peer Review",
            "Cognitive Interviews",
            "Expert Review"
          ],
          correctAnswer: 1,
          explanation: "Peer review involves having colleagues check your questions for clarity and potential issues."
        },
        {
          id: 10,
          question: "What asks people to think aloud as they answer?",
          options: [
            "Expert Review",
            "Cognitive Interviews",
            "Pilot Testing",
            "Peer Review"
          ],
          correctAnswer: 1,
          explanation: "Cognitive interviews help understand how respondents interpret and process your questions."
        },
        {
          id: 11,
          question: "What tests questions with a small sample?",
          options: [
            "Peer Review",
            "Cognitive Interviews",
            "Pilot Testing",
            "Expert Review"
          ],
          correctAnswer: 2,
          explanation: "Pilot testing involves administering the questionnaire to a small sample to identify problems."
        },
        {
          id: 12,
          question: "Who can provide specialized feedback on questions?",
          options: [
            "Friends only",
            "Survey methodology experts",
            "Anyone available",
            "Only the researcher"
          ],
          correctAnswer: 1,
          explanation: "Expert review from survey methodology specialists can identify subtle issues in question design."
        },
        {
          id: 13,
          question: "Where should you put the main subject of a question?",
          options: [
            "At the end",
            "In the middle",
            "At the beginning",
            "It doesn't matter"
          ],
          correctAnswer: 2,
          explanation: "Starting with the topic helps respondents immediately understand what the question is about."
        },
        {
          id: 14,
          question: "What should you avoid using in questions?",
          options: [
            "Complete sentences",
            "Sentence fragments",
            "Simple language",
            "Clear instructions"
          ],
          correctAnswer: 1,
          explanation: "Sentence fragments can be confusing; use complete sentences for clarity."
        },
        {
          id: 15,
          question: "What shouldn't you assume respondents have?",
          options: [
            "Time to answer",
            "Prior knowledge",
            "Interest in topic",
            "Reading ability"
          ],
          correctAnswer: 1,
          explanation: "Don't assume prior knowledge; include all necessary information in the question."
        },
        {
          id: 16,
          question: "Where should key terms appear in questions?",
          options: [
            "Near the end",
            "In the middle",
            "Near the beginning",
            "Scattered throughout"
          ],
          correctAnswer: 2,
          explanation: "Place important words early so respondents understand the question's focus immediately."
        },
        {
          id: 17,
          question: "What type of wording should you avoid?",
          options: [
            "Simple Language",
            "Specific Terms",
            "Ambiguous Wording",
            "Clear Instructions"
          ],
          correctAnswer: 2,
          explanation: "Ambiguous wording leads to different interpretations by different respondents."
        },
        {
          id: 18,
          question: "What includes language respondents don't understand?",
          options: [
            "Simple Language",
            "Jargon and Technical Terms",
            "Clear Questions",
            "Specific Wording"
          ],
          correctAnswer: 1,
          explanation: "Jargon and technical terms confuse respondents who aren't familiar with specialized language."
        },
        {
          id: 19,
          question: "What can confuse respondents with 'not' or 'never'?",
          options: [
            "Positive Phrasing",
            "Negative Phrasing",
            "Simple Language",
            "Specific Wording"
          ],
          correctAnswer: 1,
          explanation: "Negative phrasing with words like 'not' or 'never' can be confusing and lead to response errors."
        },
        {
          id: 20,
          question: "How many principles of clear question writing were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five principles were listed: use simple language, be specific, keep it brief, use positive phrasing, and provide clear instructions."
        }
      ]
    },
    {
      id: 4,
      title: "Questionnaire Structure and Flow",
      content: `
## Organizing Your Questionnaire

How you arrange questions significantly affects response rates and data quality. A logical flow keeps respondents engaged and reduces survey fatigue.

### The Opening Section

First impressions matter in questionnaires:
- **Welcome Message**: Friendly introduction explaining purpose
- **Instructions**: Clear guidance on how to complete the survey
- **Estimated Time**: Tell respondents how long it will take
- **Confidentiality Statement**: Assure respondents of privacy
- **Incentive Information**: Mention any rewards for participation

### Logical Question Sequencing

Organize questions in a logical order:
1. **Easy Questions First**: Start with simple, non-threatening questions
2. **General Before Specific**: Broad questions before detailed ones
3. **Related Questions Together**: Group questions by topic
4. **Sensitive Questions Later**: Place personal questions near the end
5. **Demographics Last**: Personal information questions at the very end

### Transition and Flow Techniques

Smooth transitions between sections:
- **Section Headings**: Clearly mark topic changes
- **Transition Statements**: Brief explanations between sections
- **Progress Indicators**: Show how much is completed
- **Logical Grouping**: Cluster related questions together
- **Consistent Formatting**: Use the same style throughout

### The Closing Section

End your questionnaire effectively:
- **Thank You Message**: Express appreciation for participation
- **Contact Information**: Provide ways to reach researchers
- **Next Steps**: Explain what happens with the data
- **Final Instructions**: Any last steps for respondents
- **Confirmation of Submission**: Clearly indicate completion

Remember: A well-structured questionnaire feels like a natural conversation, not a random collection of questions.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should a questionnaire start with?",
          options: [
            "Difficult questions",
            "Sensitive questions",
            "A welcome message",
            "Demographic questions"
          ],
          correctAnswer: 2,
          explanation: "A friendly welcome message introduces the survey and makes respondents feel comfortable."
        },
        {
          id: 2,
          question: "What should you tell respondents about time?",
          options: [
            "Nothing about time",
            "It will take hours",
            "Estimated completion time",
            "Exact minutes required"
          ],
          correctAnswer: 2,
          explanation: "Providing an estimated completion time helps respondents decide if they can complete the survey."
        },
        {
          id: 3,
          question: "What assures respondents their information is private?",
          options: [
            "Welcome Message",
            "Confidentiality Statement",
            "Instructions",
            "Incentive Information"
          ],
          correctAnswer: 1,
          explanation: "A confidentiality statement reassures respondents that their information will be kept private."
        },
        {
          id: 4,
          question: "What type of questions should come first?",
          options: [
            "Difficult questions",
            "Sensitive questions",
            "Easy questions",
            "Demographic questions"
          ],
          correctAnswer: 2,
          explanation: "Starting with easy questions builds respondent confidence and engagement."
        },
        {
          id: 5,
          question: "Which comes first: general or specific questions?",
          options: [
            "Specific questions",
            "General questions",
            "They should be mixed",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "General questions should come before specific ones to establish context."
        },
        {
          id: 6,
          question: "How should related questions be arranged?",
          options: [
            "Scattered throughout",
            "Randomly placed",
            "Together in groups",
            "At the very end"
          ],
          correctAnswer: 2,
          explanation: "Grouping related questions together creates logical sections and improves flow."
        },
        {
          id: 7,
          question: "Where should sensitive questions be placed?",
          options: [
            "At the beginning",
            "In the middle",
            "Near the end",
            "Scattered throughout"
          ],
          correctAnswer: 2,
          explanation: "Sensitive questions work better near the end when respondents are already engaged."
        },
        {
          id: 8,
          question: "Where do demographic questions typically go?",
          options: [
            "At the beginning",
            "In the middle",
            "At the very end",
            "Mixed throughout"
          ],
          correctAnswer: 2,
          explanation: "Demographic questions usually come last as they can feel intrusive."
        },
        {
          id: 9,
          question: "What clearly marks topic changes?",
          options: [
            "Progress Indicators",
            "Section Headings",
            "Transition Statements",
            "Consistent Formatting"
          ],
          correctAnswer: 1,
          explanation: "Section headings help respondents understand when they're moving to a new topic."
        },
        {
          id: 10,
          question: "What provides brief explanations between sections?",
          options: [
            "Section Headings",
            "Transition Statements",
            "Progress Indicators",
            "Logical Grouping"
          ],
          correctAnswer: 1,
          explanation: "Transition statements help respondents understand why the topic is changing."
        },
        {
          id: 11,
          question: "What shows how much is completed?",
          options: [
            "Transition Statements",
            "Progress Indicators",
            "Section Headings",
            "Consistent Formatting"
          ],
          correctAnswer: 1,
          explanation: "Progress indicators help respondents see how much they've completed and how much remains."
        },
        {
          id: 12,
          question: "What clusters related questions together?",
          options: [
            "Progress Indicators",
            "Logical Grouping",
            "Transition Statements",
            "Section Headings"
          ],
          correctAnswer: 1,
          explanation: "Logical grouping organizes questions by topic for better flow and comprehension."
        },
        {
          id: 13,
          question: "What uses the same style throughout?",
          options: [
            "Logical Grouping",
            "Consistent Formatting",
            "Progress Indicators",
            "Transition Statements"
          ],
          correctAnswer: 1,
          explanation: "Consistent formatting (fonts, colors, spacing) creates a professional, easy-to-follow survey."
        },
        {
          id: 14,
          question: "How should a questionnaire end?",
          options: [
            "Abruptly",
            "With a thank you message",
            "With more questions",
            "Without confirmation"
          ],
          correctAnswer: 1,
          explanation: "A thank you message shows appreciation and leaves respondents with a positive feeling."
        },
        {
          id: 15,
          question: "What should you provide for follow-up questions?",
          options: [
            "Nothing",
            "Contact information",
            "More surveys",
            "Advertising"
          ],
          correctAnswer: 1,
          explanation: "Contact information allows respondents to ask questions or provide additional feedback."
        },
        {
          id: 16,
          question: "What explains what happens with the data?",
          options: [
            "Welcome Message",
            "Next Steps",
            "Instructions",
            "Confidentiality Statement"
          ],
          correctAnswer: 1,
          explanation: "Explaining next steps shows transparency about how the data will be used."
        },
        {
          id: 17,
          question: "What indicates the survey is complete?",
          options: [
            "Just stopping",
            "Confirmation of submission",
            "More questions appearing",
            "Nothing special"
          ],
          correctAnswer: 1,
          explanation: "Clear confirmation lets respondents know they've successfully completed the survey."
        },
        {
          id: 18,
          question: "What mentions rewards for participation?",
          options: [
            "Welcome Message",
            "Incentive Information",
            "Confidentiality Statement",
            "Instructions"
          ],
          correctAnswer: 1,
          explanation: "Incentive information explains any rewards or compensation for participating."
        },
        {
          id: 19,
          question: "How many logical sequencing principles were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five principles: easy questions first, general before specific, related together, sensitive later, demographics last."
        },
        {
          id: 20,
          question: "What should a questionnaire feel like?",
          options: [
            "A random collection",
            "A difficult test",
            "A natural conversation",
            "A government form"
          ],
          correctAnswer: 2,
          explanation: "A well-structured questionnaire should flow naturally like a conversation, not feel disjointed."
        }
      ]
    },
    {
      id: 5,
      title: "Response Scales and Options",
      content: `
## Designing Response Options

The response options you provide are as important as the questions themselves. Poorly designed scales can distort data and frustrate respondents.

### Types of Response Scales

Different scales for different measurement needs:
- **Nominal Scales**: Categories with no order (e.g., colors, brands)
- **Ordinal Scales**: Ordered categories (e.g., small, medium, large)
- **Interval Scales**: Equal intervals between points (e.g., temperature)
- **Ratio Scales**: True zero point (e.g., weight, height)
- **Likert Scales**: Agreement scales (Strongly Agree to Strongly Disagree)

### Scale Design Principles

Create effective response scales:
1. **Balance**: Include both positive and negative options
2. **Exhaustive**: Cover all possible responses
3. **Mutually Exclusive**: No overlap between categories
4. **Appropriate Granularity**: Right number of points for your needs
5. **Clear Labels**: Every point clearly labeled, not just endpoints

### Common Scale Problems

Avoid these scale design issues:
- **Forced Choice**: No neutral or "don't know" option
- **Acquiescence Bias**: Tendency to agree with statements
- **Central Tendency Bias**: Avoiding extreme responses
- **Uneven Scales**: More positive than negative options
- **Vague Labels**: Unclear what each point means

### Number of Scale Points

Choosing how many points to use:
- **2-point scales**: Simple yes/no, agree/disagree
- **3-point scales**: Yes/neutral/no, agree/neutral/disagree
- **5-point scales**: Most common for attitude measurement
- **7-point scales**: More discrimination for sophisticated respondents
- **10-point scales**: Maximum discrimination, common for satisfaction

Remember: The scale should match what you're measuring and who's responding.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of scale has categories with no order?",
          options: [
            "Ordinal Scales",
            "Nominal Scales",
            "Interval Scales",
            "Ratio Scales"
          ],
          correctAnswer: 1,
          explanation: "Nominal scales categorize without any inherent order, like colors or brand names."
        },
        {
          id: 2,
          question: "Which scale has ordered categories?",
          options: [
            "Nominal Scales",
            "Ordinal Scales",
            "Interval Scales",
            "Ratio Scales"
          ],
          correctAnswer: 1,
          explanation: "Ordinal scales have categories with a clear order, like small, medium, and large."
        },
        {
          id: 3,
          question: "What type of scale has equal intervals?",
          options: [
            "Nominal Scales",
            "Ordinal Scales",
            "Interval Scales",
            "Ratio Scales"
          ],
          correctAnswer: 2,
          explanation: "Interval scales have equal distances between points, like temperature scales."
        },
        {
          id: 4,
          question: "Which scale has a true zero point?",
          options: [
            "Ordinal Scales",
            "Nominal Scales",
            "Interval Scales",
            "Ratio Scales"
          ],
          correctAnswer: 3,
          explanation: "Ratio scales have a true zero point, allowing statements like 'twice as much.'"
        },
        {
          id: 5,
          question: "What measures agreement levels?",
          options: [
            "Nominal Scales",
            "Ordinal Scales",
            "Likert Scales",
            "Ratio Scales"
          ],
          correctAnswer: 2,
          explanation: "Likert scales specifically measure levels of agreement with statements."
        },
        {
          id: 6,
          question: "What principle includes both positive and negative options?",
          options: [
            "Exhaustive",
            "Balance",
            "Mutually Exclusive",
            "Appropriate Granularity"
          ],
          correctAnswer: 1,
          explanation: "Balance means including roughly equal numbers of positive and negative options."
        },
        {
          id: 7,
          question: "What principle covers all possible responses?",
          options: [
            "Balance",
            "Exhaustive",
            "Mutually Exclusive",
            "Clear Labels"
          ],
          correctAnswer: 1,
          explanation: "Exhaustive means every possible answer is covered by the response options."
        },
        {
          id: 8,
          question: "What principle ensures no overlap between categories?",
          options: [
            "Exhaustive",
            "Balance",
            "Mutually Exclusive",
            "Appropriate Granularity"
          ],
          correctAnswer: 2,
          explanation: "Mutually exclusive means categories don't overlap; each response fits only one category."
        },
        {
          id: 9,
          question: "What chooses the right number of points?",
          options: [
            "Clear Labels",
            "Appropriate Granularity",
            "Balance",
            "Exhaustive"
          ],
          correctAnswer: 1,
          explanation: "Appropriate granularity means using the right number of scale points for your measurement needs."
        },
        {
          id: 10,
          question: "What labels every point clearly?",
          options: [
            "Appropriate Granularity",
            "Clear Labels",
            "Balance",
            "Mutually Exclusive"
          ],
          correctAnswer: 1,
          explanation: "Clear labels help respondents understand what each point on the scale means."
        },
        {
          id: 11,
          question: "What has no neutral or 'don't know' option?",
          options: [
            "Balanced Scale",
            "Forced Choice",
            "Exhaustive Scale",
            "Clear Scale"
          ],
          correctAnswer: 1,
          explanation: "Forced choice scales don't allow neutral responses, which can distort data."
        },
        {
          id: 12,
          question: "What is the tendency to agree with statements?",
          options: [
            "Central Tendency Bias",
            "Acquiescence Bias",
            "Forced Choice",
            "Uneven Scales"
          ],
          correctAnswer: 1,
          explanation: "Acquiescence bias is the tendency for respondents to agree with statements regardless of content."
        },
        {
          id: 13,
          question: "What avoids extreme responses?",
          options: [
            "Acquiescence Bias",
            "Central Tendency Bias",
            "Forced Choice",
            "Vague Labels"
          ],
          correctAnswer: 1,
          explanation: "Central tendency bias is avoiding the ends of scales and sticking to middle options."
        },
        {
          id: 14,
          question: "What has more positive than negative options?",
          options: [
            "Balanced Scale",
            "Uneven Scale",
            "Exhaustive Scale",
            "Clear Scale"
          ],
          correctAnswer: 1,
          explanation: "Uneven scales have different numbers of positive and negative options, creating bias."
        },
        {
          id: 15,
          question: "What makes each point's meaning unclear?",
          options: [
            "Clear Labels",
            "Vague Labels",
            "Appropriate Granularity",
            "Mutually Exclusive"
          ],
          correctAnswer: 1,
          explanation: "Vague labels don't clearly communicate what each response option means."
        },
        {
          id: 16,
          question: "How many points in a simple yes/no scale?",
          options: [
            "2 points",
            "3 points",
            "5 points",
            "7 points"
          ],
          correctAnswer: 0,
          explanation: "Yes/no scales have 2 points: one for yes and one for no."
        },
        {
          id: 17,
          question: "What scale includes a neutral option?",
          options: [
            "2-point scale",
            "3-point scale",
            "5-point scale",
            "10-point scale"
          ],
          correctAnswer: 1,
          explanation: "A 3-point scale typically includes yes, neutral, and no options."
        },
        {
          id: 18,
          question: "What is most common for attitude measurement?",
          options: [
            "2-point scales",
            "5-point scales",
            "7-point scales",
            "10-point scales"
          ],
          correctAnswer: 1,
          explanation: "5-point scales are most common for measuring attitudes and opinions."
        },
        {
          id: 19,
          question: "What provides maximum discrimination?",
          options: [
            "5-point scales",
            "7-point scales",
            "10-point scales",
            "3-point scales"
          ],
          correctAnswer: 2,
          explanation: "10-point scales allow respondents to make finer distinctions between their feelings."
        },
        {
          id: 20,
          question: "How many scale design principles were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five principles: balance, exhaustive, mutually exclusive, appropriate granularity, and clear labels."
        }
      ]
    },
    {
      id: 6,
      title: "Testing and Improving Questionnaires",
      content: `
## Evaluating Your Questionnaire

No questionnaire is perfect on the first try. Testing identifies problems before you waste time and resources collecting bad data.

### Types of Questionnaire Testing

Different methods for different stages:
- **Expert Review**: Professionals check for methodological issues
- **Cognitive Interviewing**: Understand how people interpret questions
- **Pilot Testing**: Small-scale administration to identify problems
- **Split Testing**: Compare different versions to see which works better
- **Usability Testing**: Evaluate how easy the questionnaire is to use

### What to Test For

Key areas to evaluate during testing:
1. **Comprehension**: Do respondents understand the questions?
2. **Completeness**: Are all necessary questions included?
3. **Flow**: Does the questionnaire progress logically?
4. **Timing**: How long does it take to complete?
5. **Technical Issues**: Any problems with the delivery method?

### Common Problems Identified

Typical issues found during testing:
- **Confusing Questions**: Respondents misunderstand what's being asked
- **Missing Options**: Needed response categories aren't available
- **Poor Flow**: Questions jump between unrelated topics
- **Too Long**: Respondents lose interest before finishing
- **Technical Glitches**: Problems with online survey platforms

### Iterative Improvement Process

The cycle of testing and improvement:
1. **Design Initial Version**: Create your first questionnaire draft
2. **Conduct Expert Review**: Get methodological feedback
3. **Perform Cognitive Interviews**: Understand thought processes
4. **Run Pilot Test**: Administer to small sample
5. **Analyze Results**: Identify patterns in problems
6. **Revise Questionnaire**: Make improvements based on findings
7. **Repeat if Necessary**: Test again if major changes were made

Remember: Every hour spent testing saves multiple hours of dealing with bad data later.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What has professionals check for methodological issues?",
          options: [
            "Cognitive Interviewing",
            "Expert Review",
            "Pilot Testing",
            "Split Testing"
          ],
          correctAnswer: 1,
          explanation: "Expert review involves survey methodology professionals examining your questionnaire."
        },
        {
          id: 2,
          question: "What understands how people interpret questions?",
          options: [
            "Expert Review",
            "Cognitive Interviewing",
            "Pilot Testing",
            "Usability Testing"
          ],
          correctAnswer: 1,
          explanation: "Cognitive interviewing helps researchers understand respondents' thought processes."
        },
        {
          id: 3,
          question: "What involves small-scale administration?",
          options: [
            "Expert Review",
            "Cognitive Interviewing",
            "Pilot Testing",
            "Split Testing"
          ],
          correctAnswer: 2,
          explanation: "Pilot testing means administering the questionnaire to a small sample before full deployment."
        },
        {
          id: 4,
          question: "What compares different questionnaire versions?",
          options: [
            "Pilot Testing",
            "Split Testing",
            "Expert Review",
            "Cognitive Interviewing"
          ],
          correctAnswer: 1,
          explanation: "Split testing (A/B testing) compares different versions to see which performs better."
        },
        {
          id: 5,
          question: "What evaluates how easy the questionnaire is to use?",
          options: [
            "Split Testing",
            "Usability Testing",
            "Expert Review",
            "Cognitive Interviewing"
          ],
          correctAnswer: 1,
          explanation: "Usability testing focuses on how easy and intuitive the questionnaire interface is."
        },
        {
          id: 6,
          question: "What tests if respondents understand questions?",
          options: [
            "Completeness",
            "Comprehension",
            "Flow",
            "Timing"
          ],
          correctAnswer: 1,
          explanation: "Testing comprehension ensures respondents interpret questions as intended."
        },
        {
          id: 7,
          question: "What checks if all necessary questions are included?",
          options: [
            "Comprehension",
            "Completeness",
            "Flow",
            "Technical Issues"
          ],
          correctAnswer: 1,
          explanation: "Completeness testing ensures you're collecting all the data you need."
        },
        {
          id: 8,
          question: "What evaluates if questions progress logically?",
          options: [
            "Completeness",
            "Comprehension",
            "Flow",
            "Timing"
          ],
          correctAnswer: 2,
          explanation: "Flow testing checks if the questionnaire progresses in a logical, natural order."
        },
        {
          id: 9,
          question: "What measures how long completion takes?",
          options: [
            "Flow",
            "Timing",
            "Technical Issues",
            "Comprehension"
          ],
          correctAnswer: 1,
          explanation: "Timing tests measure actual completion times to ensure estimates are accurate."
        },
        {
          id: 10,
          question: "What identifies delivery method problems?",
          options: [
            "Timing",
            "Technical Issues",
            "Comprehension",
            "Completeness"
          ],
          correctAnswer: 1,
          explanation: "Technical issue testing identifies problems with online platforms, mobile compatibility, etc."
        },
        {
          id: 11,
          question: "What happens when respondents misunderstand questions?",
          options: [
            "Missing Options",
            "Confusing Questions",
            "Poor Flow",
            "Too Long"
          ],
          correctAnswer: 1,
          explanation: "Confusing questions are those that respondents interpret differently than intended."
        },
        {
          id: 12,
          question: "What occurs when needed categories aren't available?",
          options: [
            "Confusing Questions",
            "Missing Options",
            "Poor Flow",
            "Technical Glitches"
          ],
          correctAnswer: 1,
          explanation: "Missing options means respondents can't select the answer that truly reflects their situation."
        },
        {
          id: 13,
          question: "What happens with jumps between unrelated topics?",
          options: [
            "Missing Options",
            "Confusing Questions",
            "Poor Flow",
            "Too Long"
          ],
          correctAnswer: 2,
          explanation: "Poor flow occurs when questions don't transition smoothly between topics."
        },
        {
          id: 14,
          question: "What causes respondents to lose interest?",
          options: [
            "Poor Flow",
            "Too Long",
            "Technical Glitches",
            "Missing Options"
          ],
          correctAnswer: 1,
          explanation: "Questionnaires that are too long cause respondent fatigue and lower completion rates."
        },
        {
          id: 15,
          question: "What involves problems with online platforms?",
          options: [
            "Too Long",
            "Technical Glitches",
            "Confusing Questions",
            "Missing Options"
          ],
          correctAnswer: 1,
          explanation: "Technical glitches include software bugs, compatibility issues, or platform errors."
        },
        {
          id: 16,
          question: "What is the first step in the improvement process?",
          options: [
            "Conduct Expert Review",
            "Design Initial Version",
            "Perform Cognitive Interviews",
            "Run Pilot Test"
          ],
          correctAnswer: 1,
          explanation: "The process starts with designing your initial questionnaire draft."
        },
        {
          id: 17,
          question: "What comes after designing the initial version?",
          options: [
            "Run Pilot Test",
            "Conduct Expert Review",
            "Analyze Results",
            "Revise Questionnaire"
          ],
          correctAnswer: 1,
          explanation: "After initial design, expert review provides methodological feedback."
        },
        {
          id: 18,
          question: "How many testing types were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five testing types: expert review, cognitive interviewing, pilot testing, split testing, and usability testing."
        },
        {
          id: 19,
          question: "How many key testing areas were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five key areas: comprehension, completeness, flow, timing, and technical issues."
        },
        {
          id: 20,
          question: "What does every hour of testing save?",
          options: [
            "Money only",
            "Multiple hours with bad data",
            "Just a little time",
            "Nothing significant"
          ],
          correctAnswer: 1,
          explanation: "Testing saves multiple hours that would be spent dealing with problems from bad data."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: {
    id: "questionnaire-design-certificate-exam",
    title: "Questionnaire Design Certificate Final Exam",
    description: "Comprehensive examination covering all modules of the Questionnaire Design Certificate course.",
    passingScore: 70,
    timeLimit: 60, // minutes
    questions: [
      {
        id: 1,
        question: "What is the primary purpose of a questionnaire?",
        options: [
          "To entertain respondents",
          "To gather information from respondents",
          "To test computer systems",
          "To have casual conversations"
        ],
        correctAnswer: 1,
        explanation: "Questionnaires are research instruments specifically designed to gather structured information from respondents.",
        module: 1
      },
      {
        id: 2,
        question: "Which principle emphasizes keeping questions short?",
        options: [
          "Clarity",
          "Brevity",
          "Relevance",
          "Complexity"
        ],
        correctAnswer: 1,
        explanation: "Brevity ensures respondents don't abandon questionnaires due to length, improving completion rates.",
        module: 1
      },
      {
        id: 3,
        question: "What type of question allows selecting only one option?",
        options: [
          "Checkboxes",
          "Multiple Choice",
          "Rating Scales",
          "Essay Questions"
        ],
        correctAnswer: 1,
        explanation: "Multiple choice questions require selecting exactly one option from several possibilities.",
        module: 2
      },
      {
        id: 4,
        question: "Which question type measures agreement levels?",
        options: [
          "Multiple Choice",
          "Likert Scales",
          "Checkboxes",
          "Short Answer"
        ],
        correctAnswer: 1,
        explanation: "Likert Scales specifically measure levels of agreement from Strongly Agree to Strongly Disagree.",
        module: 2
      },
      {
        id: 5,
        question: "What asks two things at once in a single question?",
        options: [
          "Leading Question",
          "Double-Barreled Question",
          "Clear Question",
          "Specific Question"
        ],
        correctAnswer: 1,
        explanation: "Double-barreled questions combine two questions, making it impossible to know which part is being answered.",
        module: 3
      },
      {
        id: 6,
        question: "What reading level should questionnaire questions target?",
        options: [
          "College level",
          "12th grade level",
          "8th grade level",
          "5th grade level"
        ],
        correctAnswer: 2,
        explanation: "Questions should be written at an 8th-grade reading level to ensure wide understanding across populations.",
        module: 3
      },
      {
        id: 7,
        question: "Where should demographic questions typically be placed?",
        options: [
          "At the beginning",
          "In the middle",
          "At the very end",
          "Scattered throughout"
        ],
        correctAnswer: 2,
        explanation: "Demographic questions usually come last as they can feel intrusive if asked too early.",
        module: 4
      },
      {
        id: 8,
        question: "What should a questionnaire start with?",
        options: [
          "Difficult questions",
          "Sensitive questions",
          "A welcome message",
          "Demographic questions"
        ],
        correctAnswer: 2,
        explanation: "A friendly welcome message introduces the survey and makes respondents feel comfortable participating.",
        module: 4
      },
      {
        id: 9,
        question: "What type of scale categorizes without any inherent order?",
        options: [
          "Ordinal Scales",
          "Nominal Scales",
          "Interval Scales",
          "Ratio Scales"
        ],
        correctAnswer: 1,
        explanation: "Nominal scales categorize data without any order, like colors or brand names.",
        module: 5
      },
      {
        id: 10,
        question: "What principle ensures no overlap between response categories?",
        options: [
          "Balance",
          "Exhaustive",
          "Mutually Exclusive",
          "Appropriate Granularity"
        ],
        correctAnswer: 2,
        explanation: "Mutually exclusive means each response fits only one category with no overlap.",
        module: 5
      },
      {
        id: 11,
        question: "What involves professionals checking for methodological issues?",
        options: [
          "Cognitive Interviewing",
          "Expert Review",
          "Pilot Testing",
          "Split Testing"
        ],
        correctAnswer: 1,
        explanation: "Expert review involves survey methodology professionals examining your questionnaire design.",
        module: 6
      },
      {
        id: 12,
        question: "What tests how respondents interpret questions?",
        options: [
          "Expert Review",
          "Cognitive Interviewing",
          "Pilot Testing",
          "Usability Testing"
        ],
        correctAnswer: 1,
        explanation: "Cognitive interviewing helps understand respondents' thought processes and interpretations.",
        module: 6
      },
      {
        id: 13,
        question: "How many main steps are in the questionnaire design process?",
        options: [
          "Three",
          "Five",
          "Seven",
          "Ten"
        ],
        correctAnswer: 1,
        explanation: "Five main steps: define objectives, identify audience, design questions, structure flow, and test/revise.",
        module: 1
      },
      {
        id: 14,
        question: "What type of questions allow free-form responses?",
        options: [
          "Closed-Ended Questions",
          "Multiple Choice",
          "Open-Ended Questions",
          "Rating Scales"
        ],
        correctAnswer: 2,
        explanation: "Open-ended questions allow respondents to answer in their own words without predefined options.",
        module: 2
      },
      {
        id: 15,
        question: "What is a good maximum word count for a clear question?",
        options: [
          "50 words",
          "40 words",
          "30 words",
          "20 words"
        ],
        correctAnswer: 3,
        explanation: "Keeping questions under 20 words helps maintain clarity and reduces cognitive load.",
        module: 3
      },
      {
        id: 16,
        question: "What shows respondents how much they've completed?",
        options: [
          "Transition Statements",
          "Progress Indicators",
          "Section Headings",
          "Welcome Messages"
        ],
        correctAnswer: 1,
        explanation: "Progress indicators help respondents see completion percentage and remaining questions.",
        module: 4
      },
      {
        id: 17,
        question: "What scale has a true zero point?",
        options: [
          "Ordinal Scales",
          "Nominal Scales",
          "Interval Scales",
          "Ratio Scales"
        ],
        correctAnswer: 3,
        explanation: "Ratio scales have a true zero point, allowing statements like 'twice as much' or 'half as often.'",
        module: 5
      },
      {
        id: 18,
        question: "What compares different questionnaire versions?",
        options: [
          "Pilot Testing",
          "Split Testing",
          "Expert Review",
          "Cognitive Interviewing"
        ],
        correctAnswer: 1,
        explanation: "Split testing (A/B testing) compares different versions to determine which performs better.",
        module: 6
      },
      {
        id: 19,
        question: "What should every question in a questionnaire serve?",
        options: [
          "Multiple purposes",
          "A purpose",
          "No particular purpose",
          "Entertainment value"
        ],
        correctAnswer: 1,
        explanation: "The principle of relevance means every question should serve a specific purpose.",
        module: 1
      },
      {
        id: 20,
        question: "Which question type allows selecting all that apply?",
        options: [
          "Multiple Choice",
          "Checkboxes",
          "Rating Scales",
          "Ranking"
        ],
        correctAnswer: 1,
        explanation: "Checkbox questions allow respondents to select multiple options that apply to them.",
        module: 2
      },
      {
        id: 21,
        question: "What suggests a particular answer to respondents?",
        options: [
          "Clear Question",
          "Leading Question",
          "Specific Question",
          "Brief Question"
        ],
        correctAnswer: 1,
        explanation: "Leading questions suggest or imply what answer the researcher expects or prefers.",
        module: 3
      },
      {
        id: 22,
        question: "What type of questions should come first in a questionnaire?",
        options: [
          "Difficult questions",
          "Sensitive questions",
          "Easy questions",
          "Demographic questions"
        ],
        correctAnswer: 2,
        explanation: "Starting with easy questions builds respondent confidence and increases engagement.",
        module: 4
      },
      {
        id: 23,
        question: "What is the tendency to agree with statements called?",
        options: [
          "Central Tendency Bias",
          "Acquiescence Bias",
          "Forced Choice",
          "Uneven Scales"
        ],
        correctAnswer: 1,
        explanation: "Acquiescence bias is the tendency for respondents to agree with statements regardless of content.",
        module: 5
      },
      {
        id: 24,
        question: "What evaluates how easy a questionnaire is to use?",
        options: [
          "Split Testing",
          "Usability Testing",
          "Expert Review",
          "Cognitive Interviewing"
        ],
        correctAnswer: 1,
        explanation: "Usability testing focuses on how intuitive and easy-to-use the questionnaire interface is.",
        module: 6
      },
      {
        id: 25,
        question: "Which application uses questionnaires for workplace satisfaction?",
        options: [
          "Market Research",
          "Employee Feedback",
          "Customer Satisfaction",
          "Health Assessments"
        ],
        correctAnswer: 1,
        explanation: "Employee feedback surveys measure workplace satisfaction, engagement, and organizational climate.",
        module: 1
      },
      {
        id: 26,
        question: "What do demographic questions typically ask about?",
        options: [
          "Opinions",
          "Preferences",
          "Age and gender",
          "Agreement levels"
        ],
        correctAnswer: 2,
        explanation: "Demographic questions collect background information like age, gender, education, and income.",
        module: 2
      },
      {
        id: 27,
        question: "What method involves having colleagues review questions?",
        options: [
          "Pilot Testing",
          "Peer Review",
          "Cognitive Interviews",
          "Expert Review"
        ],
        correctAnswer: 1,
        explanation: "Peer review involves having colleagues check your questions for clarity and potential issues.",
        module: 3
      },
      {
        id: 28,
        question: "What provides brief explanations between sections?",
        options: [
          "Section Headings",
          "Transition Statements",
          "Progress Indicators",
          "Logical Grouping"
        ],
        correctAnswer: 1,
        explanation: "Transition statements help respondents understand why the topic is changing between sections.",
        module: 4
      },
      {
        id: 29,
        question: "How many points are in a simple yes/no scale?",
        options: [
          "2 points",
          "3 points",
          "5 points",
          "7 points"
        ],
        correctAnswer: 0,
        explanation: "Yes/no scales have 2 points: one for yes and one for no.",
        module: 5
      },
      {
        id: 30,
        question: "What tests if all necessary questions are included?",
        options: [
          "Comprehension",
          "Completeness",
          "Flow",
          "Technical Issues"
        ],
        correctAnswer: 1,
        explanation: "Completeness testing ensures you're collecting all the data needed for your research objectives.",
        module: 6
      },
      {
        id: 31,
        question: "What should you do before full questionnaire deployment?",
        options: [
          "Print thousands of copies",
          "Pilot test",
          "Change all questions",
          "Add more questions"
        ],
        correctAnswer: 1,
        explanation: "Pilot testing with a small group identifies problems before full deployment.",
        module: 1
      },
      {
        id: 32,
        question: "Which question type routes respondents to different sections?",
        options: [
          "Screening Questions",
          "Filter Questions",
          "Demographic Questions",
          "Open-Ended Questions"
        ],
        correctAnswer: 1,
        explanation: "Filter questions (skip logic) route respondents to appropriate questions based on their answers.",
        module: 2
      },
      {
        id: 33,
        question: "What shouldn't you assume respondents have?",
        options: [
          "Time to answer",
          "Prior knowledge",
          "Interest in topic",
          "Reading ability"
        ],
        correctAnswer: 1,
        explanation: "Don't assume prior knowledge; include all necessary information in questions.",
        module: 3
      },
      {
        id: 34,
        question: "What clusters related questions together?",
        options: [
          "Progress Indicators",
          "Logical Grouping",
          "Transition Statements",
          "Section Headings"
        ],
        correctAnswer: 1,
        explanation: "Logical grouping organizes questions by topic for better flow and comprehension.",
        module: 4
      },
      {
        id: 35,
        question: "What scale is most common for attitude measurement?",
        options: [
          "2-point scales",
          "5-point scales",
          "7-point scales",
          "10-point scales"
        ],
        correctAnswer: 1,
        explanation: "5-point scales are most common for measuring attitudes and opinions.",
        module: 5
      },
      {
        id: 36,
        question: "What identifies problems with online platforms?",
        options: [
          "Timing",
          "Technical Issues",
          "Comprehension",
          "Completeness"
        ],
        correctAnswer: 1,
        explanation: "Technical issue testing identifies problems with online survey platforms and mobile compatibility.",
        module: 6
      },
      {
        id: 37,
        question: "How many fundamental principles guide questionnaire design?",
        options: [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        correctAnswer: 1,
        explanation: "Three fundamental principles: clarity, brevity, and relevance.",
        module: 1
      },
      {
        id: 38,
        question: "What combines multiple questions with the same response scale?",
        options: [
          "Matrix Questions",
          "Multiple Choice",
          "Checkboxes",
          "Essay Questions"
        ],
        correctAnswer: 0,
        explanation: "Matrix questions present several questions together with the same set of response options.",
        module: 2
      },
      {
        id: 39,
          question: "What is the final step in questionnaire design?",
          options: [
          "Define Objectives",
          "Identify Audience",
          "Design Questions",
          "Test and Revise"
        ],
        correctAnswer: 3,
        explanation: "Testing and revising through pilot studies helps identify problems before full deployment.",
        module: 3
      },
      {
        id: 40,
        question: "What does every hour of testing save researchers?",
        options: [
          "Money only",
          "Multiple hours with bad data",
          "Just a little time",
          "Nothing significant"
        ],
        correctAnswer: 1,
        explanation: "Testing saves multiple hours that would be spent cleaning, analyzing, or recollecting bad data.",
        module: 6
      }
    ]
  }
};

export default questionnaireDesignCertificate;
