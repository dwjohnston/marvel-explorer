import React from 'react';
import { MarvelCharacter, MarvelResource, MarvelResourceCollection } from '../../types/MarvelCharacter';
import { getLargestImage } from '../../utils/getMarvelImage';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';
import { StyledSelectedCharacterPanel } from './SelectedCharacterPanel.style';

export type SelectedCharacterPanelProps = {
  className? : string; 
}


const AppearsIn = (props: {
  label: string;
  collection: MarvelResourceCollection
}) => {

  const { label,collection } = props;

  const {items} = collection;

  //nb. Pagination for characters that appear in lots of comics/events etc is not done, and only the first 20 will be shown

  return <div className="appears-in">
    <h3>{label}</h3>
    {items.length === 0 ? <p>(None)</p> : <ul> {items.map((v) => {
        return <li key = {v.resourceURI}>{v.name}</li>
    })}</ul>}
  </div>
}

export const SelectedCharacterPanel = (props: SelectedCharacterPanelProps) => {
  const { className =''} = props;

  const { selectedCharacter, selectCharacter } = useMarvelCharacterState();

  const handleCloseClick = () =>{
    selectCharacter(null);
  }

  const thumbnail = selectedCharacter ? getLargestImage(selectedCharacter.thumbnail) : null;

  return <StyledSelectedCharacterPanel className={`dj-marvel-selected-character-panel ${className}`}>

    {selectedCharacter && <>
      <h2>
        {selectedCharacter.name}</h2>

      <button onClick = {handleCloseClick}> Close</button>

      {thumbnail &&
        <div className="img-container">
          <img src={thumbnail} alt={selectedCharacter.name} />
        </div>
      }

      <p className = "description">{selectedCharacter.description}</p>


      <AppearsIn label = "Series" collection = {selectedCharacter.series}/>
      <AppearsIn label = "Comics" collection = {selectedCharacter.comics}/>
      <AppearsIn label = "Events" collection = {selectedCharacter.events}/>


      {selectedCharacter.urls.length > 0 && <div className ="see-also" ><h3>See Also</h3>
          {selectedCharacter.urls.map((v) => {
            return <a key ={v.url} href ={v.url} target ="_blank" rel="noreferrer">{v.type}</a>
          })}
      </div>}

    </>
    }
  </StyledSelectedCharacterPanel>;
};
