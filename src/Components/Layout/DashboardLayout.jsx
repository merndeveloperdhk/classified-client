import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Container from "../Shared/Container";


const DashboardLayout = () => {
    return (
      <Container>

     
        <div className='relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2 justify-center'>
        {/* <Sidebar></Sidebar> */}
        <div className="col-span-12 md:col-span-3 md:py-5 px-2 ">
       <Sidebar></Sidebar>
        </div>
        
        <div className='col-span-12  md:col-span-9 '>
          <div className='md:py-5 px-2'>
            <Outlet />
          </div>
        </div>
      </div>
      </Container>
    );
};

export default DashboardLayout;