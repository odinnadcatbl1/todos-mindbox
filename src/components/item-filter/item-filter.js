import Button from '@mui/material/Button';
import './item-filter.css'

const ItemFilter = (props) => {
    
    const {filter, onFilterChange} = props;
    console.log(filter);
    const buttonsType = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
      ];
    
    const buttons = buttonsType.map(({name, label}) => {
        const isActive = filter === name; 
        return (
          <Button variant={isActive ? "outlined": "contained"}
                  key={name}
                  onClick={() => onFilterChange(name)}>
              {label}
          </Button>
        );
      });

      return (
        <div className="btn-group">
            {buttons}
        </div>
      );

};

export default ItemFilter;