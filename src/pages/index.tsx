import { NextPage } from "next"
import Layout from "@/components/Layout"
import Home from "@/components/screens/Home"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default HomePage
