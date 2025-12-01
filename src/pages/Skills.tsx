import React, {useEffect, useRef} from "react";
import gsap from "gsap";

// import "../assets/style.css"
interface TechStack {
    name: string
    url: string
}


export const Skills: React.FC = () => {

    const sliderRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!sliderRef.current) return;
        const sliderWidth = sliderRef.current.offsetWidth;
        // const elem = document.getElementById('stack')

        // const position = rect?.right -rect.x
        // console.log("Position--", position)
        gsap.to("#stack", {
            duration: 5,
            ease: "none",
            x: `+=${sliderWidth}`,
            modifiers: {
                x: gsap.utils.unitize(x => parseInt(x) % sliderWidth),
            },
            repeat: -1,
        })


    }, []);


    const techStackIcons = [
        {
            name: "Tailwindcss",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "React",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
            name: "Vue",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
        },
        {
            name: "Postgres",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        },
        {
            name: "Javascript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name: "Typescript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            name: "MySQL",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        },
        {
            name: "Rails",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
        },
        {
            name: "Ruby",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        },
        {
            name: "Python",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
            name: "Fastapi",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        },
        {
            name: "NodeJs",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            name: "ExpressJs",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        }
    ] as TechStack []
        // <span className="text-casablanca-400">web apps</span>

    return (
        <div className="lg:w-9/12 w-10/12 h-screen mx-auto space-y-8">
            <div className="flex w-full justify-center flex-col items-center ">
                <p className="text-stone-400 text-xl">My stacks</p>
                <p className="text-white text-[20px] lg:text-[32px]">View my  <span className="text-casablanca-400">Tech stacks </span>I am experienced in</p>
            </div>
            <div className="">
                <div className="col-span-1">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            techStackIcons.map((icon) => (
                                <div className="bg-dark-two flex flex-col items-center rounded-xl p-8 gap-4 ">
                                    <img src={icon.url} className="w-10"/>
                                    <p className="text-white text-lg font-semibold">{icon.name}</p>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


// const techStackIcons = [
//     {
//         name: "tailwindcss",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//     },
//     {
//         name: "react",
//         url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
//     },
//     {
//         name: "postgres",
//         url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
//     },
//     {
//         name: "postman",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
//     },
//     {
//         name: "vueJs",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
//     },
//     {
//         name: "js",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
//     },
//     {
//         name: "ts",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
//     },
//     {
//         name: "sql",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
//     },
//     {
//         name: "mysql",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
//     },
//     {
//         name: "rails",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
//     },
//     {
//         name: "ruby",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg",
//
//     },
//     {
//         name: "python",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
//     },
//     {
//         name: "fastapi",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg",
//     },
//     {
//         name: "nodeJs",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
//     },
//     {
//         name: "expressJs",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
//     },
//     {
//         name: "apache",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original-wordmark.svg",
//     },
//     {
//         name: "linux",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
//     },
//     {
//         name: "git",
//         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
//     }