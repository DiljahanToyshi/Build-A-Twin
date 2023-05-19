import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "./Toys";

const AllToys = () => {
  const [toys,setToys] = useState([]);
  useEffect(() =>{
    fetch('toys.json')
    .then(res => res.json())
    .then(data =>setToys(data))
  },[])
    return (
      <div className="grid fap-8 lg:grid-cols-3">
       
    
        {/* <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs> */}
      {
        // eslint-disable-next-line react/jsx-key
        toys.map(toy =>(<Toys key={toy._id} toy={toy}></Toys>))
      }
      </div>
    );
};

export default AllToys;