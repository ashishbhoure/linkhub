
import LogInWithGoogle from '@/Components/buttons/LogInWithGoogle';

export default function LoginPage() {
  return (
    <div>
        <div className=" p-4 max-w-xs mx-auto">

        <h1 className="text-4xl font-bold text-center mb-2"> 
            Sign In
        </h1>
        <p className='text-center mb-6 text-gray-500'>Sign into your account using one of the methods below</p>

        <LogInWithGoogle />
        
        </div>
    </div>
  );
}
