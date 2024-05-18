import boss from '../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div>
            <div className='my-10 relative'>
                <img src={boss} />
                <div className='bg-white opacity-80 text-center lg:w-[70%] lg:absolute top-32 left-48 p-10 rounded-xl'>
                    <h1 className='font-bold text-3xl my-2'>Bistro Boss</h1>
                    <p>Breakfast is the most important meal of the day. The Boss Cafe can set you up with appetising, nutritious food to start your day the right way, just like a Boss!! If you have a food allergy or intolerance (or someone you are ordering for has), you MUST phone the restaurant. Do not order if you cannot get the allergy information you need.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;