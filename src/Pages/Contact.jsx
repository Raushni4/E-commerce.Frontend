import React, { useState } from 'react'

export default function Contact() {
    const addFormUrl = "http://localhost:3000/addForm";
    var [name, setName] = useState();
    var [email, setEmail] = useState();
    var [messag, setMessag] = useState();
    var [PhoneNumber, setPhoneNumber] = useState();
    var [Intrest, setIntrest] = useState();

    const [message, setMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const addForm =(e)=>{
        e.preventDefault();
        setIsLoading(false)
        console.log(name,email,messag,PhoneNumber,Intrest)
        const body ={
            name ,
            email,
            message:messag,
           PhoneNumber: PhoneNumber,
           Intrest
        }
        fetch(addFormUrl,{
            method:"Post",
            body:JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response => response.json())
        .then((json)=>{
            setMessage(json.message)
            setIsLoading(false)
        }).catch(error=>{
            setMessage("Internal Error")
            setIsLoading(false)
        }).finally(()=>{
            setIsLoading(false)
        })
    }


    
    return (
        <div className='flex justify-center h-[80vh] pt-10'>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                         Name
                        </label>
                        <input value={name} onChange={(e)=>setName(e.target.value)}class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
                        
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <input value={messag} onChange={(e)=>setMessag(e.target.value)}class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Message" type="text" placeholder="message" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        PhoneNumber
                        </label>
                        <input value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="Number" placeholder="Number" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Intrest
                        </label>
                        <div>
                            <input value={Intrest} onChange={(e)=>setIntrest(e.target.value)}class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder='Intrest'>
                                
                            </input>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                {<button className='text-white w-20 bg-black hover:bg-blue-800 ml-4'onClick={addForm} >Contact</button>}
                </div>
            </form>
        </div>
    )
}