import Image from "next/image"
import Link from "next/link"

const socialLink = [
  { id: 1, link: "https://www.facebook.com/", icon: "/facebook.svg", alt: "facebook logo" },
  { id: 2, link: "https://www.twitter.com/", icon: "/twitterx.svg", alt: "twitter logo" },
  { id: 3, link: "https://www.instagram.com/mayork85", icon: "/instagram.svg", alt: "instagram logo" },
  { id: 4, link: "tel:+2348022934137", icon: "/phone.svg", alt: "phone logo" },
  { id: 5, link: "mailto:adeniyimayokuno@gmail.com", icon: "/email.svg", alt: "email logo" },
]

const SocialMedia = () => {
  return (

      <div className="flex gap-5">
            {socialLink.map((social) => {
              const index = social.id;
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className={`p-2 rounded-full shadow-md border-slate-300 transition duration-300 ease-in-out 
                    ${ index === 1 ? "hover:bg-blue-500" : "" }
                    ${ index === 2 ? "hover:bg-slate-300" : ""}
                    ${ index === 3 ? "hover:bg-gradient-to-r from-purple-400 to-pink-400" : "" }
                    ${ index === 4 ? "hover:bg-blue-400" : ""}
                    ${ index === 5 ? "hover:bg-slate-400" : ""}`}
                >
                  <Image
                    src={social.icon}
                    height={20}
                    width={20}
                    alt="social"
                    className="object-contain"
                  />
                </Link>
              );
            })}
          </div>

  )
}

export default SocialMedia;