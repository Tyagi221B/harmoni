import SongBar from "./SongBar";

const RelatedSongs = ({
	data,
	isPlaying,
	activeSong,
	handlePauseClick,
	handlePlayClick,
  artistsId,
}) => <div className="flex flex-col" >
  <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
  {/* {console.log(data)} */}

  <div className="mt-6 w-full flex flex-col">
    {data?.tracks.map((song, i)=>(
      <SongBar
      key={`${song.key}-${artistsId}`}
      song={song}
      i={i}
      artistId={artistsId}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
      />
    ))}
  </div>
</div>;

export default RelatedSongs;
