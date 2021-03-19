import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Swamp from '../components/SwampSection/SwampSection';
import Navbar from '../components/Navbar/Navbar';


export default function Home() {
  return (
   <Layout>
     <Navbar />
     <Banner />
     <Swamp />
   </Layout>
  )
}
