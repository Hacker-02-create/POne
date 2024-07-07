import BottomNavBar from '@/components/bottomNav';
import Card from '@/components/card';
import ScreenMode from '@/components/screenMode';
import TT from '@/components/timeTable';
import mode from '@/components/screenMode';
// import sCard from '@/components/sCard';
const props = {
    criteria: 95,
};

const Dashboard = async () => {
    const date = new Date();
    return (
        <div className='w-full h-full bg-zinc-800 flex flex-col items-center px-4 '> {/* Add padding-bottom here */}
            <ScreenMode />
            <div className='flex justify-around w-full mt-20'>
                <div className='flex-col justify-center w-full bg-white rounded-md p-4'>
                    <span className=''>B.Tech | CSE(AIML) | V</span>
                    <br />
                    <span className='font-extralight text-sm'>Registered On {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</span>
                    <div className='flex w-full justify-around mt-4 mb-2'>
                        <Card {...props} />
                        <Card {...props} />
                    </div>
                </div>
            </div>
            <div className='w-full mt-4'>
                <TT />
            </div>
         
        </div>
    );
};

export default Dashboard;
