//import React from 'react'

import { Routes, Route } from "react-router"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NotificationsPage from "./pages/NotificationsPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"




const App = () => {
  // tanstack query
  const {data,isLoading,error} = useQuery({
    queryKey: ["todos"],

    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      return res.data
    },
  })
  console.log({data})
  console.log({isLoading})
  console.log({error})

  return (
    <div className=" h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>


      <Toaster />

    </div>
  )
}

export default App
