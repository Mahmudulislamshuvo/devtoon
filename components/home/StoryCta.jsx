import Link from"next/link";
import { getServerSession} from"next-auth";
import { authOptions} from"@/lib/auth";
import { MdAutoAwesome} from"react-icons/md";

const StoryCta = async () => {
 const session = await getServerSession(authOptions);
 
 // If logged in, redirect to their dev dashboard to see repos
 // If not logged in, redirect to login page
 const targetUrl = session ?"/dev":"/login";

 return (
 <div className="mb-12 bg-surface-container/30 border border-outline-variant/30 rounded-2xl p-5 xs:p-6 md:p-8 lg:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group glass-pane">
 {/* Decorative background glow */}
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
 
 <div className="relative z-10 space-y-3 flex-1">
 <h2 className="font-headline-lg text-xl xs:text-2xl md:text-3xl font-bold text-on-surface flex items-center justify-center md:justify-start gap-3">
 <MdAutoAwesome className="text-primary text-2xl xs:text-3xl animate-pulse"/>
 Make Your Repositories Story?
 </h2>
 <p className="text-on-surface-variant font-body-md text-sm xs:text-base md:text-lg max-w-2xl mx-auto md:mx-0">
 Turn your GitHub commits into an epic AI-generated story. Connect your account, pick a repository, and let the magic happen.
 </p>
 </div>

 <div className="relative z-10 shrink-0 w-full md:w-auto">
 <Link 
 href={targetUrl}
 className="flex items-center justify-center w-full md:w-auto px-6 xs:px-8 py-3.5 xs:py-4 bg-primary text-on-primary font-bold font-label-caps tracking-wider rounded-lg hover:bg-primary-container hover:scale-105 transition-all duration-300"
 >
 {session ? "View My Repositories" : "Login with GitHub"}
 </Link>
 </div>
 </div>
 );
};

export default StoryCta;
