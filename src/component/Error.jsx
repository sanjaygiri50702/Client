import React from 'react';


function Error(props) {
    const {msg} = props;
    return (
        <div aria-live="polite" aria-atomic="true" class="position-relative">
            <div class="toast-container position-absolute top-0 end-0 p-3">
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="..." class="rounded me-2" alt="..."/>
                        <strong class="me-auto">Bootstrap</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        {msg}
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Error;