import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "components/Account";
import Link from "next/link";


const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          providers={["github", "apple"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        // <Account session={session} />
        <Link href={'/advancedsearch'}>
        <a>search</a>
        </Link>

      )}
    </div>
  );
};

export default Home;
