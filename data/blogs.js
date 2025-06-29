const blogsData = [
  {
    title: "The Ultimate Guide to Tailwind CSS v4",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Tailwind CSS v4 is a game-changer for modern web development. It offers an enhanced utility-first approach with smarter tooling, better performance, and complete design freedom. Developers can now build elegant and responsive interfaces with less effort and cleaner code.</p><h2>What's New in Tailwind CSS v4</h2><ul><li>Faster builds with a revamped JIT engine</li><li>Extended support for dynamic theming</li><li>Built-in animation utilities</li><li>Advanced color management with CSS variables</li></ul><h3>Developer Experience Improvements</h3><p>The new release improves DX significantly with improved autocomplete, type safety in supported editors, and reduced configuration complexity. Tailwind now works seamlessly with frameworks like Next.js, Nuxt, and Laravel out of the box.</p><h3>Performance and Optimization</h3><p>Tailwind CSS v4 is leaner and faster. The purge system is smarter, reducing bundle sizes dramatically. It's ideal for scaling large design systems while maintaining blazing-fast performance across all environments.</p>",
    date: "May 1, 2025",
    category: "Web Development",
  },
  {
    title: "The Ultimate Guide to the React Compiler",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>The React Compiler is a revolutionary optimization layer that analyzes and transforms your React code at build time. It unlocks automatic performance boosts by eliminating unnecessary re-renders—without changing how you write components.</p><h2>How the React Compiler Works</h2><ul><li>Analyzes component dependencies and reactivity</li><li>Automatically memoizes components when safe</li><li>Optimizes prop passing and re-render logic</li><li>Integrates tightly with React's existing runtime</li></ul><h3>Benefits for Developers</h3><p>With the compiler, developers get improved runtime performance without manual <code>useMemo</code> or <code>React.memo</code> boilerplate. It's designed to help you write idiomatic React code while getting the benefits of fine-grained reactivity for free.</p><h3>Looking Ahead</h3><p>Currently experimental, the React Compiler is part of the React team's vision for making performance the default. It will eventually integrate with frameworks like Next.js, providing seamless, compiler-level enhancements for real-world apps.</p>",
    date: "May 2, 2025",
    category: "Web Development",
  },
  {
    title: "The Future of Data Science in 2025",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Data Science in 2025 is more automated, integrated, and accessible than ever. As businesses demand faster insights, the tools and practices in this field are rapidly evolving to keep up.</p><h2>Key Trends Shaping the Future</h2><ul><li>Widespread use of AutoML and no-code tools</li><li>Edge analytics and real-time decision-making</li><li>Greater focus on ethical AI and bias mitigation</li><li>Interdisciplinary teams combining domain + data expertise</li></ul><h3>Why It Matters</h3><p>Understanding these shifts helps professionals future-proof their skillsets and businesses build more responsive, data-driven products.</p><h3>Looking Ahead</h3><p>Expect AI to become more democratized, pushing data science into every layer of the modern enterprise.</p>",
    date: "May 3, 2025",
    category: "Data Science",
  },
  {
    title: "Mastering Feature Engineering for Machine Learning",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Feature engineering is a foundational skill in data science that turns raw data into valuable insights. Great features can make or break your model's performance.</p><h2>Core Techniques</h2><ul><li>Handling missing values intelligently</li><li>Encoding categorical variables</li><li>Creating interaction features</li><li>Using domain knowledge for feature synthesis</li></ul><h3>Best Practices</h3><p>Always validate your engineered features using cross-validation and monitor for data leakage. Use tools like pandas, sklearn, and featuretools to streamline the process.</p><h3>Real-World Impact</h3><p>Proper feature engineering can dramatically improve model accuracy, reduce training time, and improve interpretability.</p>",
    date: "May 4, 2025",
    category: "Data Science",
  },
  {
    title: "A Beginner's Guide to Data Cleaning",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Before you model anything, you need clean, reliable data. Data cleaning is the first and often most time-consuming step in any data science workflow.</p><h2>Common Data Issues</h2><ul><li>Missing values and incorrect formats</li><li>Duplicates and outliers</li><li>Inconsistent labels and encodings</li><li>Time zone or unit mismatches</li></ul><h3>Cleaning Techniques</h3><p>Use libraries like <code>pandas</code> and <code>numpy</code> to clean and preprocess data efficiently. Always visualize before and after cleaning to confirm changes.</p><h3>Why It's Critical</h3><p>Garbage in, garbage out — no model can fix fundamentally flawed data. Investing in proper cleaning ensures better outcomes and trustworthy insights.</p>",
    date: "May 5, 2025",
    category: "Data Science",
  },
  {
    title: "Why Edge Computing Is the Future of the Internet",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Edge computing is transforming the way data is processed by bringing computation closer to users. It's enabling real-time performance across industries from healthcare to IoT.</p><h2>Core Advantages</h2><ul><li>Lower latency for faster user experiences</li><li>Improved data privacy and localization</li><li>Reduced server load and bandwidth usage</li></ul><h3>Use Cases</h3><p>Think smart traffic lights, real-time video analytics, and autonomous vehicles — all powered by edge infrastructure.</p><h3>What's Next</h3><p>As 5G expands, edge computing will become a default architecture for responsive, intelligent applications.</p>",
    date: "May 6, 2025",
    category: "Technology",
  },
  {
    title: "How Quantum Computing Is Redefining Problem Solving",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Quantum computing isn't just theoretical anymore. With breakthroughs in qubit stability and quantum error correction, we're closer than ever to real-world applications.</p><h2>What Makes It Different</h2><ul><li>Massive parallelism via superposition</li><li>Complex problem solving beyond classical limits</li><li>Potential to transform cryptography and material science</li></ul><h3>Where It's Headed</h3><p>Companies like IBM and Google are racing toward quantum advantage — solving problems no classical computer can handle efficiently.</p><h3>Why It Matters</h3><p>Quantum computing will reshape security, AI, drug discovery, and logistics optimization over the next decade.</p>",
    date: "May 7, 2025",
    category: "Technology",
  },
  {
    title: "The Rise of AI Co-Pilots in Everyday Software",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>AI co-pilots are becoming integral to how we interact with tools, from code editors to productivity apps. They boost creativity, reduce friction, and speed up workflows.</p><h2>Popular AI-Powered Tools</h2><ul><li>GitHub Copilot for coding</li><li>Notion AI for knowledge work</li><li>Microsoft 365 Copilot for office tasks</li></ul><h3>Impact on Workflows</h3><p>These tools turn passive software into collaborative partners, helping users focus on high-level thinking while offloading repetitive tasks.</p><h3>Future Outlook</h3><p>Expect AI copilots to become smarter, more context-aware, and deeply integrated into the tools you use every day.</p>",
    date: "May 8, 2025",
    category: "Technology",
  },
  {
    title: "The Role of Blockchain Beyond Cryptocurrency",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Blockchain is more than Bitcoin. It's becoming a foundational technology for decentralized apps, supply chains, identity management, and more.</p><h2>Practical Applications</h2><ul><li>Transparent logistics in global trade</li><li>Decentralized identity verification</li><li>Secure voting and record keeping</li></ul><h3>Enterprise Adoption</h3><p>Major industries are exploring private blockchains to increase trust, transparency, and efficiency in data handling.</p><h3>What's Next</h3><p>Expect more use cases to emerge as regulations mature and blockchain technology becomes easier to integrate.</p>",
    date: "May 9, 2025",
    category: "Technology",
  },
  {
    title: "How Augmented Reality is Changing Everyday Life",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Augmented Reality (AR) is no longer a niche trend — it's shaping how we shop, learn, and communicate in real time through interactive, digital overlays.</p><h2>Everyday Use Cases</h2><ul><li>Try-before-you-buy in e-commerce</li><li>Interactive learning in classrooms</li><li>Navigation and translation on the go</li></ul><h3>AR in the Enterprise</h3><p>Industries like healthcare, real estate, and manufacturing are leveraging AR for training, remote assistance, and visual planning.</p><h3>The Road Ahead</h3><p>With advances in wearable tech and spatial computing, AR is set to become as ubiquitous as smartphones.</p>",
    date: "May 11, 2025",
    category: "Technology",
  },
  {
    title: "Atomic Habits: The Science of Lasting Change",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Building better habits doesn't require massive effort — it's about small changes that compound over time. Inspired by James Clear's framework, this guide explores how to rewire your daily routines for success.</p><h2>The 4 Laws of Habit Formation</h2><ul><li>Make it obvious</li><li>Make it attractive</li><li>Make it easy</li><li>Make it satisfying</li></ul><h3>Why Tiny Habits Matter</h3><p>Even a 1% daily improvement leads to significant transformation over the long term. Habits are the invisible architecture of everyday life.</p><h3>How to Start Today</h3><p>Use habit stacking and environment design to align your surroundings with your goals. Focus on identity-based habits, not just outcomes.</p>",
    date: "May 11, 2025",
    category: "Self Improvement",
  },
  {
    title: "Digital Detox: Reclaiming Focus in a Hyperconnected World",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Constant notifications and endless scrolling are draining your focus. A digital detox helps reset your attention span and regain control of your time and energy.</p><h2>Signs You Need a Detox</h2><ul><li>Difficulty concentrating</li><li>Compulsive phone use</li><li>Low mental energy and poor sleep</li></ul><h3>Practical Detox Strategies</h3><p>Set app limits, use grayscale mode, and schedule screen-free hours. Try a 7-day detox challenge to re-establish healthy digital boundaries.</p><h3>Long-Term Focus Habits</h3><p>Use tech intentionally. Design your digital environment for clarity, not distraction. Focus is a skill — and like any skill, it gets stronger with practice.</p>",
    date: "May 11, 2025",
    category: "Self Improvement",
  },
  {
    title: "Atomic Habits: The Science of Lasting Change",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Building better habits doesn't require massive effort — it's about small changes that compound over time. Inspired by James Clear's framework, this guide explores how to rewire your daily routines for success.</p><h2>The 4 Laws of Habit Formation</h2><ul><li>Make it obvious</li><li>Make it attractive</li><li>Make it easy</li><li>Make it satisfying</li></ul><h3>Why Tiny Habits Matter</h3><p>Even a 1% daily improvement leads to significant transformation over the long term. Habits are the invisible architecture of everyday life.</p><h3>How to Start Today</h3><p>Use habit stacking and environment design to align your surroundings with your goals. Focus on identity-based habits, not just outcomes.</p>",
    date: "May 14, 2025",
    category: "Self Improvement",
  },
  {
    title: "Digital Detox: Reclaiming Focus in a Hyperconnected World",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Constant notifications and endless scrolling are draining your focus. A digital detox helps reset your attention span and regain control of your time and energy.</p><h2>Signs You Need a Detox</h2><ul><li>Difficulty concentrating</li><li>Compulsive phone use</li><li>Low mental energy and poor sleep</li></ul><h3>Practical Detox Strategies</h3><p>Set app limits, use grayscale mode, and schedule screen-free hours. Try a 7-day detox challenge to re-establish healthy digital boundaries.</p><h3>Long-Term Focus Habits</h3><p>Use tech intentionally. Design your digital environment for clarity, not distraction. Focus is a skill — and like any skill, it gets stronger with practice.</p>",
    date: "May 14, 2025",
    category: "Self Improvement",
  },
  {
    title: "Supervised vs Unsupervised Learning: What's the Difference?",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Understanding the difference between supervised and unsupervised learning is foundational for anyone getting started in machine learning. Each type serves different purposes in extracting insights from data.</p><h2>Supervised Learning</h2><ul><li>Trained on labeled data</li><li>Used for classification and regression</li><li>Examples: spam detection, price prediction</li></ul><h3>Unsupervised Learning</h3><p>Works with unlabeled data to find hidden patterns. Common use cases include clustering, anomaly detection, and dimensionality reduction.</p><h3>Which One to Choose?</h3><p>It depends on your dataset and problem type. Many real-world solutions involve a combination of both.</p>",
    date: "May 24, 2025",
    category: "Machine Learning",
  },
  {
    title: "Top 5 Machine Learning Algorithms You Should Know",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Machine learning is filled with algorithms — but a few form the backbone of most real-world applications. Mastering them gives you a strong foundation for practical problem-solving.</p><h2>Must-Know Algorithms</h2><ul><li>Linear Regression</li><li>Decision Trees</li><li>Random Forest</li><li>Support Vector Machines (SVM)</li><li>K-Means Clustering</li></ul><h3>When to Use What</h3><p>Each algorithm has strengths based on your data's size, noise, and feature complexity. Understanding the trade-offs is key to model selection.</p><h3>Next Steps</h3><p>Experiment with open datasets and visualize results to grasp their behavior under different conditions.</p>",
    date: "May 1, 2025",
    category: "Machine Learning",
  },
  {
    title: "A Gentle Introduction to Neural Networks",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Neural networks mimic the human brain to learn complex patterns from data. They are the building blocks of modern deep learning systems.</p><h2>Key Components</h2><ul><li>Input, hidden, and output layers</li><li>Activation functions like ReLU and sigmoid</li><li>Backpropagation and gradient descent</li></ul><h3>Why They Work</h3><p>Neural networks learn by adjusting weights through many small updates during training, allowing them to model non-linear relationships.</p><h3>Getting Started</h3><p>Use libraries like TensorFlow or PyTorch to build and train your first network on image or text data.</p>",
    date: "May 24, 2025",
    category: "Machine Learning",
  },
  {
    title: "How to Evaluate Machine Learning Models Effectively",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Evaluation is a critical step in any machine learning project. Choosing the right metric ensures your model aligns with business goals and performs well in the real world.</p><h2>Common Metrics</h2><ul><li>Accuracy, Precision, Recall</li><li>F1 Score and AUC-ROC</li><li>Mean Absolute Error (MAE), RMSE</li></ul><h3>Cross-Validation Techniques</h3><p>Use k-fold cross-validation or stratified sampling to prevent overfitting and ensure generalization.</p><h3>Real-World Considerations</h3><p>Pick metrics based on the cost of errors. For example, in healthcare, false negatives may be far worse than false positives.</p>",
    date: "May 21, 2025",
    category: "Machine Learning",
  },
  {
    title: "Building a Machine Learning Pipeline: Step-by-Step",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Successful ML models require more than just training code — they need a pipeline that automates data flow, transformation, training, and evaluation.</p><h2>Typical Pipeline Stages</h2><ul><li>Data collection and preprocessing</li><li>Feature selection and transformation</li><li>Model training and validation</li><li>Deployment and monitoring</li></ul><h3>Tools and Frameworks</h3><p>Use tools like Scikit-learn Pipelines, MLflow, or Kubeflow to orchestrate and manage your workflow efficiently.</p><h3>Why Pipelines Matter</h3><p>They reduce human error, ensure reproducibility, and speed up experimentation — key for production-grade ML.</p>",
    date: "May 4, 2025",
    category: "Machine Learning",
  },
  {
    title: "The Art of Creative Writing",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Unlock your creative potential through the power of storytelling. Learn essential techniques to craft compelling narratives that captivate readers.</p><h2>Key Elements</h2><ul><li>Character development</li><li>Plot structure</li><li>World-building</li><li>Dialogue crafting</li></ul>",
    date: "June 15, 2025",
    category: "Writing",
  },
  {
    title: "Introduction to Digital Photography",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Master the fundamentals of digital photography and transform your images from amateur to professional quality.</p><h2>Essential Skills</h2><ul><li>Understanding exposure</li><li>Composition techniques</li><li>Lighting basics</li><li>Post-processing</li></ul>",
    date: "July 1, 2025",
    category: "Photography",
  },
  {
    title: "Financial Planning for Beginners",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Take control of your financial future with this comprehensive guide to personal finance management.</p><h2>Core Topics</h2><ul><li>Budgeting strategies</li><li>Investment basics</li><li>Debt management</li><li>Retirement planning</li></ul>",
    date: "August 20, 2025",
    category: "Finance",
  },
  {
    title: "Healthy Cooking Fundamentals",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Learn to prepare nutritious and delicious meals that support your health goals without sacrificing flavor.</p><h2>Essential Skills</h2><ul><li>Meal planning</li><li>Nutritional balance</li><li>Cooking techniques</li><li>Recipe modification</li></ul>",
    date: "September 5, 2025",
    category: "Cooking",
  },
  {
    title: "Yoga for Beginners",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Start your yoga journey with this comprehensive guide to basic poses and breathing techniques.</p><h2>Key Components</h2><ul><li>Basic asanas</li><li>Breathing exercises</li><li>Meditation basics</li><li>Proper alignment</li></ul>",
    date: "October 10, 2025",
    category: "Fitness",
  },
  {
    title: "Digital Marketing Essentials",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Master the fundamentals of digital marketing to grow your business online effectively.</p><h2>Core Strategies</h2><ul><li>SEO basics</li><li>Social media marketing</li><li>Email campaigns</li><li>Content marketing</li></ul>",
    date: "November 15, 2025",
    category: "Marketing",
  },
  {
    title: "Home Garden Design",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Create your own beautiful and sustainable garden with this comprehensive guide to garden design.</p><h2>Design Elements</h2><ul><li>Plant selection</li><li>Layout planning</li><li>Soil preparation</li><li>Maintenance tips</li></ul>",
    date: "December 1, 2025",
    category: "Gardening",
  },
  {
    title: "Interior Design Basics",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Transform your living space with fundamental interior design principles and techniques.</p><h2>Key Concepts</h2><ul><li>Color theory</li><li>Space planning</li><li>Furniture arrangement</li><li>Lighting design</li></ul>",
    date: "January 5, 2026",
    category: "Design",
  },
  {
    title: "Music Production for Beginners",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Start your journey in music production with this guide to essential tools and techniques.</p><h2>Core Skills</h2><ul><li>DAW basics</li><li>Sound design</li><li>Mixing fundamentals</li><li>Recording techniques</li></ul>",
    date: "February 10, 2026",
    category: "Music",
  },
  {
    title: "Basic Car Maintenance",
    author: {
      name: "Sumit Saha",
      avatar:
        "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75",
    },
    description:
      "<p>Learn essential car maintenance skills to keep your vehicle running smoothly and save on repair costs.</p><h2>Maintenance Tasks</h2><ul><li>Oil changes</li><li>Tire maintenance</li><li>Battery care</li><li>Fluid checks</li></ul>",
    date: "March 15, 2026",
    category: "Automotive",
  },
];

export default blogsData;
