"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogByIdAction } from "@/store/slices/BlogSlice"; // Assuming this is where auth data might be fetched

export default function ProfilePage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { singleBlog, isLoadingSingleBlog } = useSelector(
    (state) => state.blog
  );
  const { data: authData } = singleBlog;

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: "lion",
    authType: "admin",
    contentType: "image/jpeg",
    imageBase64: "/9j/4AAQSkZJRgABAgEASABIAAD/4gxYSUNDX1BST0ZJTEUAA", // Truncated for brevity
    email: "lion@example.com", // Placeholder email
    password: "********", // Placeholder password (masked for security)
    createdAt: "2025-03-14T17:41:21.988Z",
    updatedAt: "2025-03-14T17:41:52.394Z",
    _id: "67d46a4173eb3b5dd2ddeb90",
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state for editing
  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
    password: "", // Don't prefill password for security
    image: null, // For file input
  });

  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getBlogByIdAction(id));
    }
  }, [dispatch, id]);

  // Update profileData if authData is fetched from the store
  useEffect(() => {
    if (authData && authData.authID) {
      setProfileData({
        name: authData.authID.name || "lion",
        authType: authData.authID.authType || "admin",
        contentType: authData.authID.contentType || "image/jpeg",
        imageBase64:
          authData.authID.imageBase64 ||
          "/9j/4AAQSkZJRgABAgEASABIAAD/4gxYSUNDX1BST0ZJTEUAA",
        email: authData.authID.email || "lion@example.com",
        password: authData.authID.password || "********",
        createdAt: authData.authID.createdAt || "2025-03-14T17:41:21.988Z",
        updatedAt: authData.authID.updatedAt || "2025-03-14T17:41:52.394Z",
        _id: authData.authID._id || "67d46a4173eb3b5dd2ddeb90",
      });

      // Update formData when profileData changes
      setFormData({
        name: authData.authID.name || "lion",
        email: authData.authID.email || "lion@example.com",
        password: "",
        image: null,
      });
    }
  }, [authData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("_id", profileData._id);

      // Handle image if uploaded
      if (formData.image) {
        const reader = new FileReader();
        reader.readAsDataURL(formData.image);
        reader.onloadend = async () => {
          const base64String = reader.result.split(",")[1]; // Get base64 string without the data URI prefix
          formDataToSend.append("imageBase64", base64String);
          formDataToSend.append("contentType", formData.image.type);

          await updateProfile(formDataToSend);
        };
      } else {
        await updateProfile(formDataToSend);
      }
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      setIsSubmitting(false);
    }
  };

  const updateProfile = async (formDataToSend) => {
    // API call to update the profile
    const response = await fetch("/api/update-profile", {
      method: "PUT",
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const updatedData = await response.json();

    // Update local state with the new data
    setProfileData((prev) => ({
      ...prev,
      name: updatedData.name || prev.name,
      email: updatedData.email || prev.email,
      imageBase64: updatedData.imageBase64 || prev.imageBase64,
      contentType: updatedData.contentType || prev.contentType,
      updatedAt: updatedData.updatedAt || prev.updatedAt,
    }));

    // Close the modal and reset the form
    setIsModalOpen(false);
    setFormData({
      name: updatedData.name || profileData.name,
      email: updatedData.email || profileData.email,
      password: "",
      image: null,
    });
    setIsSubmitting(false);
  };

  if (isLoadingSingleBlog) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Profile Header */}
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src={`data:${profileData.contentType};base64,${profileData.imageBase64}`}
                alt={profileData.name}
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              {profileData.name}
            </h1>
            <p className="text-gray-600">@{profileData._id}</p>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Auth Type:</span>
              <span className="text-gray-900">{profileData.authType}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Email:</span>
              <span className="text-gray-900">{profileData.email}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Password:</span>
              <span className="text-gray-900">{profileData.password}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Joined:</span>
              <span className="text-gray-900">
                {new Date(profileData.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Last Updated:</span>
              <span className="text-gray-900">
                {new Date(profileData.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Edit Profile
            </h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  placeholder="New Password (leave blank to keep current)"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {isSubmitting ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
