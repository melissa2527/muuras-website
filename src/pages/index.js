import Layout from '../components/Layout/Layout';
import Banner from '../components/home/Banner/Banner';
import Swamp from '../components/home/SwampSection/SwampSection';
import Navbar from '../components/Navbar/Navbar';


export default function Home() {
  return (
    <div style={{'overflowX': 'hidden'}}>
     <Navbar />
     <Layout>
     <Banner />
     <Swamp />
   </Layout>
   </div >
  )
}
