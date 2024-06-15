function keys(value) 
            {
                var input = document.getElementById("input-box");
                if (value === 'AC') 
                {
                    input.value = '';
                } 
                else if (value === 'C')
                {
                    input.value = input.value.slice(0, -1);
                } 
                else if (value === '=') 
                {
                    try 
                    {
                        input.value = eval(input.value);
                    } 
                    catch (e) 
                    {
                        input.value = 'Error';
                    }
                } 
                else 
                {
                    input.value += value;
                }
            }