import ProfileInfo from "./ProfileInfo";

const Profile = () => {

  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1250px] w-full px-8">
        <div className="w-full m-3">
          <p className="text-H6 font-bold text-black">پروفایل</p>
        </div>
        <hr />
        <ProfileInfo />
      </div>
    </main>
  );
};

export default Profile;
