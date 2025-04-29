import Link from "next/link";

const Button = ({text, link}: {text: string, link: string}) => {
    return(
        <Link href={link}>
            <button className="px-8 py-4 myButton rounded-lg font-medium transition-colors duration-300">{text}</button>
        </Link>
    );
}

export default Button;