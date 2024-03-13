import React from 'react';
import RoomModel from "./RoomModel";

const RoomCard = ({ room, trdata, index }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          className="pb-4 rounded-t-lg"
          src={`https://pics.uncubus.tech/images/11242/upload/500X257/${room.img[0]}`}
          alt="product image"
        />
      </div>

      <div className="px-5 pb-5">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {trdata.translations.en.Chamber[room.id + "-titer"]}
          </h5>
          <p className="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
            {trdata.translations.en.Chamber[room.id + "-description"].replace(/<[^>]+>/g, '').length > 100 ? trdata.translations.en.Chamber[room.id + "-description"].replace(/<[^>]+>/g, '').substring(0, 100) + '...' : trdata.translations.en.Chamber[room.id + "-description"].replace(/<[^>]+>/g, '')}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900 dark:text-white"></span>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <button data-modal-target={index} data-modal-toggle={index} type="button">
              Read More
            </button>
          </div>
          {/* Main modal */}
          <RoomModel index={index} room={room} trrooms={trdata.translations.en.Chamber} />
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
