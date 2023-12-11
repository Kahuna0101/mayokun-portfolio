import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default layout