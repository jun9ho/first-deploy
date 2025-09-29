import Image from "next/image";

async function getResumeInfo() {
    const res = await fetch('https://raw.githubusercontent.com/jun9ho/first-deploy/refs/heads/main/service/resume_general_info_service.json');
    // API 응답이 성공적인지 확인
    if (!res.ok) {
        // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function getPortfolioInfo() {
    const res = await fetch('https://raw.githubusercontent.com/jun9ho/first-deploy/refs/heads/main/service/resume_portfolio_service.json');
    // API 응답이 성공적인지 확인
    if (!res.ok) {
        // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Home() {
    const resumeData = await getResumeInfo();
    //const portfolioData = await getPortfolioInfo();
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            {/* Header */}
            <section className="text-center space-y-2">
                <h1 className="text-3xl font-bold">안녕하세요. 저는 {resumeData.name} 입니다. </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    <b>Aspiring Backend Developer</b> · Java · Spring Boot · MariaDB · C++/Python
                </p>
            </section>

            {/* About Me */}
            <section>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">👤</span>
                    <h2 className="text-2xl font-semibold border-b pb-1 flex-1">About Me</h2>
                </div>
                <ul className="space-y-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <li>🎓 Computer Science.</li>
                    <li>💻 Aspiring <b>Backend Developer</b></li>
                    <li>🌱 Currently learning <b>Java, Spring Boot, MariaDB</b></li>
                    <li>📚 Solving algorithm problems on Baekjoon (solved.ac)</li>
                </ul>
            </section>

            {/* Tech Stack */}
            <section>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💻</span>
                    <h2 className="text-2xl font-semibold border-b pb-1 flex-1">Tech Stack</h2>
                </div>
                <h3 className="font-medium mb-2"></h3>
                <div className="flex gap-4 flex-wrap">
                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                </div>
            </section>

            {/* Career */}
            <section>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💼</span>
                    <h2 className="text-2xl font-semibold border-b pb-1 flex-1">Career</h2>
                </div>
                <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <p className="font-bold">
                            Mar 2024 – Mar 2025 | Undergraduate Researcher{" "}
                            <span className="text-indigo-600 dark:text-indigo-400"></span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Conducted research on Monocular SLAM and 3D reconstruction using Gaussian Splatting
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <p className="font-bold">
                            Dec 2023 – Mar 2024 | Intern {" "}
                            <span className="text-indigo-600 dark:text-indigo-400"></span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Developed real-time data processing pipeline utilizing TOF camera SDK and visualization tools
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">📊</span>
                    <h2 className="text-2xl font-semibold border-b pb-1 flex-1">Stats</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <img
                        src="https://mazassumnida.wtf/api/v2/generate_badge?boj=wjdgh9806"
                        alt="Solved.ac Profile"
                        className="rounded-lg shadow"
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=jun9ho&cache_seconds=3600"
                        alt="Top Langs"
                        className="rounded-lg shadow"
                    />
                </div>
            </section>
        </main>
    );
}
