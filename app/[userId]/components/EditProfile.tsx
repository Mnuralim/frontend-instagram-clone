import ButtonBack from '@/components/ButtonBack';
import { updateUser } from '@/utils/fetch';
import { useUser } from '@/utils/swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { KeyedMutator } from 'swr';

const EditProfile = () => {
  const { data: session } = useSession();
  const { user, isLoading, mutate }: { user: IUser; isLoading: boolean; mutate: KeyedMutator<any> } = useUser(
    session?.user.token as string,
    session?.user._id
  );
  const [image, setImage] = useState<string | ArrayBuffer | null>('');
  const [imageProfile, setImageProfil] = useState<any>(null);
  const [name, setName] = useState<string>(user.profile.fullName);
  const [username, setUsername] = useState<string>(user.username);
  const [link, setLink] = useState<string>(user.profile.link);
  const [bio, setBio] = useState<string>(user.profile.bio);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageProfil(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData: FormData = new FormData();
    formData.append('username', username.toLowerCase());
    formData.append('fullName', name);
    formData.append('bio', bio);
    formData.append('link', link);
    formData.append('image', imageProfile);
    try {
      const response = await updateUser(session?.user.token as string, formData);
      const data = await response?.json();
      if (response?.ok) {
        toast.success('Update successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
        mutate();
        setLoading(false);
        router.back();
      } else {
        setLoading(false);
        toast.error(data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      throw new Error('Error');
    }
  };

  return (
    <section className="fixed bg-black inset-0 top-0 left-0 z-50 flex justify-center items-center md:bg-opacity-50">
      <div className="absolute right-4 top-4 hidden md:block">
        <AiOutlineClose onClick={() => router.back()} size="23" color="#fff" className="cursor-pointer" />
      </div>
      <div className="w-full h-full z-10 bg-black md:rounded-xl md:max-w-[35%] md:max-h-[80%] md:bg-[#262626]">
        <form onSubmit={handleSubmit} className="px-3">
          <div className="flex justify-between items-center pt-4 px-3">
            <div className="w-5">
              <span className="md:hidden">
                <ButtonBack />
              </span>
            </div>
            <h2 className="font-semibold ml-4">Edit Profile</h2>
            <button
              disabled={loading ? true : false}
              type="submit"
              className={`${loading ? 'cursor-not-allowed' : ''} text-sm text-indigo-800 font-semibold`}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Save'}
            </button>
          </div>
          <div className=" flex justify-between items-center  gap-3 w-full px-3 py-4 mt-4">
            <div className="flex flex-col items-center justify-center w-full gap-3">
              <label htmlFor="postFile" className="cursor-pointer">
                {image ? (
                  <Image
                    src={image.toString()}
                    alt="profile"
                    width={1000}
                    height={1000}
                    className="object-cover w-16 h-16 rounded-full"
                  />
                ) : (
                  <Image
                    src={user.profile.imageProfile}
                    alt={'profile'}
                    width={1000}
                    height={1000}
                    className="object-cover rounded-full w-16 h-16"
                  />
                )}
              </label>
              <input
                onChange={handleImageChange}
                accept="image/*"
                type="file"
                name="postFile"
                id="postFile"
                className="hidden"
              />
              <label htmlFor="postFile" className="text-sm text-indigo-800 font-bold cursor-pointer">
                Edit picture
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name">
              <p className="text-xs text-[#A8A8A8]">Name</p>
              <div>
                <input
                  type="text"
                  className="bg-transparent border-b w-full outline-none py-1"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="username">
              <p className="text-xs text-[#A8A8A8]">Username</p>
              <div>
                <input
                  type="text"
                  className="bg-transparent border-b w-full outline-none py-1"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="bio">
              <p className="text-xs text-[#A8A8A8]">Bio</p>
              <div>
                <input
                  type="text"
                  className="bg-transparent border-b w-full outline-none py-1"
                  placeholder="Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="link">
              <p className="text-xs text-[#A8A8A8]">Link</p>
              <div>
                <input
                  type="text"
                  className="bg-transparent border-b w-full outline-none py-1"
                  placeholder="Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </label>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EditProfile;
