import Employees from "../components/screen/home/Employees"
import Stats from "../components/screen/home/Stats"


const Home:React.FC = () => {
  return (
    <section className="p-3 md:p-6 xl:p-8 flex flex-col gap-8">
      <Stats/>
      <Employees/>
    </section>
  )
}

export default Home