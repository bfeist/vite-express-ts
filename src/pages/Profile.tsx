import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { removeToken } from "@/utils/token";
import { getMe } from "@/api/me";

const useGetMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [me, setMe] = useState<Pick<User, "username">>();

  useEffect(() => {
    const fetchMe = async () => {
      setIsLoading(true);
      try {
        const me = await getMe();
        setMe(me);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMe();
  }, []);

  return { isLoading, error, me };
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const { error, isLoading, me } = useGetMe();
  if (error) {
    navigate("/", { replace: true });
  }
  if (isLoading || !me?.username) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Welcome {me?.username}!</h1>
      <button
        onClick={() => {
          removeToken();
          navigate("/");
        }}
      >
        Logout
      </button>
    </>
  );
};

export { ProfilePage };
