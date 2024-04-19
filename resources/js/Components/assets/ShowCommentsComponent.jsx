import React from "react";

export default function ShowCommentsComponent({ comments }) {
    return (
        <div className="mt-4">
            {!comments || comments.length === 0 ? (
                <div className="text-center">Комментариев пока нет</div>
            ) : (
                comments.map((comment, index) => (
                    <div
                        key={index}
                        className="bg-lightgrey rounded-lg p-3 flex flex-col md:flex-row justify-center items-center md:items-start shadow-lg mb-4"
                    >
                        <div className="flex-shrink-0 mr-4">
                            <img
                                alt={comment.user.title}
                                width="48"
                                height="48"
                                className="rounded-full w-10 h-10 shadow-lg mb-4"
                                src={comment.user.avatar}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-darkblue font-semibold text-lg text-center md:text-left">
                                {comment.user.name}
                            </h3>
                            <div className="text-center md:text-left">
                                <label>Комментарий:</label>
                                <p
                                    style={{ width: "90%" }}
                                    className="text-gray-600 text-md"
                                >
                                    {comment.comment}
                                </p>
                            </div>
                            <div className="text-center md:text-left">
                                <p
                                    style={{ width: "90%" }}
                                    className="text-gray-500 text-sm"
                                >
                                    {comment.created_at}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

        // <div className='mt-4'>
        //     {!comments || comments.length===0 ? (
        //         <div className="">Комментариев пока нет</div>
        //     ) : (
        //     comments.map((comment, index)=>
        //     <div key={index} className="bg-lightgrey rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
        //         <div className="flex flex-row justify-center mr-2">
        //             <img
        //                alt={comment.user.title}
        //                width="48"
        //                height="48"
        //                className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
        //                src={comment.user.avatar}
        //             />

        //             <h3 className=" text-darkblue font-semibold text-lg text-center md:text-left ">{comment.user.name}</h3>
        //         </div>

        //         <div className="">
        //             <label>Комментарий:</label>
        //             <p style={{width: "90%"}} className="text-gray-600 text-md text-center md:text-left ">{comment.comment}</p>
        //         </div>
        //         <div className="">
        //             <p style={{width: "90%"}} className=" text-gray-500 text-sm text-center md:text-left ">{comment.created_at}</p>
        //         </div>
        //     </div>
        //     ))}
        // </div>
    );
}
