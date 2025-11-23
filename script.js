const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-6px)' },
          { transform: 'translateY(0px)' }
        ],
        {
          duration: 5200,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    }
