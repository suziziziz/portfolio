function attrAdd( _element, _qualified_name, _atribute ) {
    let _temp_attr_ = _element.getAttribute(_qualified_name);
    if ( _temp_attr_ === null) { _element.setAttribute(_qualified_name, _atribute); return; }
    let _temp_new_attr_ = [];
    let _str_new_attr_ = "";
    /* === STEP 1 === */
    for ( let i = 0; i < _temp_attr_.length; i++ ) {
        if ( _temp_attr_[i] === " " ) {
            _temp_new_attr_.push(_str_new_attr_);
            _str_new_attr_ = "";
        } else {
            _str_new_attr_ += _temp_attr_[i];
        }
    }
    _temp_new_attr_.push(_str_new_attr_);

    /* === STEP 2 ===*/
    if ( _temp_new_attr_.indexOf(_atribute) === -1 ) {
        _temp_new_attr_.push(_atribute);
    } else {
        return;
    }
    /* === STEP 3 === */
    _str_new_attr_ = "";
    _temp_new_attr_.forEach(ind_element => {
        if ( ind_element !== _atribute ) {
            _str_new_attr_ += ind_element + " ";
        } else {
            _str_new_attr_ += ind_element;
        }
    });
    _element.setAttribute(_qualified_name, _str_new_attr_);
}
function attrRemove( _element, _qualified_name, _atribute ) {
    let _temp_attr_ = _element.getAttribute(_qualified_name);
    if ( _temp_attr_ === null) { return; }
    let _temp_new_attr_ = [];
    let _str_new_attr_ = "";
    /* === STEP 1 === */
    for ( let i = 0; i < _temp_attr_.length; i++ ) {
        if ( _temp_attr_[i] === " " ) {
            _temp_new_attr_.push(_str_new_attr_);
            _str_new_attr_ = "";
        } else {
            _str_new_attr_ += _temp_attr_[i];
        }
    }
    _temp_new_attr_.push(_str_new_attr_);

    /* === STEP 2 ===*/
    if ( _temp_new_attr_.indexOf(_atribute) !== -1 ) {
        let _old_arr = [];
        _temp_new_attr_.forEach(ind_element => {
            if ( ind_element !== _atribute ) {
                _old_arr.push(ind_element);
            }
        });
        _temp_new_attr_ = _old_arr;
    } else {
        return;
    }
    /* === STEP 3 === */
    _str_new_attr_ = "";
    for ( let i = 0; i < _temp_new_attr_.length; i++ ) {
        if ( i !== _temp_new_attr_.length-1 ) {
            _str_new_attr_ += _temp_new_attr_[i] + " ";
        } else {
            _str_new_attr_ += _temp_new_attr_[i];
        }
    }
    _element.setAttribute(_qualified_name, _str_new_attr_);
}
