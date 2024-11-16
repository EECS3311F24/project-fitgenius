function Home() {
    return (
        <div className='Home-Container'>
            {/* Left Image */}
            <img 
                className='DumbbellImg'
                src="https://cdn-icons-png.flaticon.com/512/38/38464.png" 
                alt="Left decoration"
            />

            {/* Center Text */}
            <h1 className='AppName'>Fit Genius</h1>

            {/* Right Image */}
            <img 
                className='BrainImg'
                src="https://www.onlygfx.com/wp-content/uploads/2021/09/brain-clipart.png" 
                alt="Right decoration"
            />
        </div>
    );
}

export default Home;
