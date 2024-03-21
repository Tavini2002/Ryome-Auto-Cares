import React from "react";
import "./Home.css";
import "./Profile.js";
import "./Chome.js";

export default function Profile() {
  return (
    <div class="bg-white overflow-hidden shadow rounded-lg border">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about you.
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
        </dl>
      </div>
      `
      <div class="flex gap-3 max-w-sm">
        <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">
          Edit
        </button>
        <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
          Delete Account
        </button>
      </div>
      `
    </div>
  );
}
