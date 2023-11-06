import { useDispatch } from "react-redux"; 
import { all, fruits, vegetables } from "../../../store/productFilter";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";


function TabFilter() {
  const [ tabValue, setTabValue ] = useState(0)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let index;
    if (e.target.innerText === 'ALL') {index = 0; dispatch(all());}
    if (e.target.innerText === 'FRUITS') {index = 1; dispatch(fruits())} 
    if (e.target.innerText === 'VEGETABLES') {index = 2; dispatch(vegetables())}
    setTabValue(() => {
      if (index === 0) return 0;
      if (index === 1) return 1;
      if (index === 2) return 2;
    })
  }

  return (
    <Tabs
      value={tabValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs"
    >
      <Tab label="ALL" />
      {/* <Tab label="FRUITS" />
      <Tab label="VEGETABLES" /> */}
    </Tabs>
  )
}

export default TabFilter