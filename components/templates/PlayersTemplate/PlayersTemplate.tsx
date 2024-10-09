import PlayersCard from '@/components/organisms/PlayersCard/PlayersCard';
import PlayersSearchBar from '@/components/organisms/PlayersSearchBar/PlayersSearchBar';
import { Player } from '@/types/player';
import React from 'react';

type PlayersTemplateProps = {
  players: Player[];
};

/**
 * コンポーネント
 * @param props
 */
const PlayersTemplate: React.FC<PlayersTemplateProps> = (props) => {
  const { players } = props;

  return (
    <>
      <div className="mb-6">
        <PlayersSearchBar />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {players.map((player) => {
          const status = player.Status === 'Active' ? 'active' : 'freeAgent';

          return (
            <PlayersCard
              key={player.PlayerID}
              href={`/players/${status}/${player.PlayerID}`}
              playerData={player}
            />
          );
        })}
      </div>
    </>
  );
};

export default PlayersTemplate;
