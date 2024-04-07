
import * as utils from '../src/utils/utils';

describe('utils', () => {
    it('should format currency as USD', () => {
        const result = utils.formatAmount(500);
        expect(result).toBe('USD 500')
    });
   
    it('should format date accurately', () => {
        const result = utils.formatDate('2024-04-02');
        expect(result).toBe('02 April, 2024')
    });
    
    it('should return the matching option', () => {
        const selectedOptions = [{label: 'Option 1', value: 'option-1' }, {label: 'Option 2', value: 'option-2' }];
        const option = {label: 'Option 2', value: 'option-2' };

        const result = utils.getOptionIsSelected(selectedOptions, option);
        expect(result).toMatchObject(option)
    });
   
    it('should summarize the provided text', () => {
        const result = utils.summarize('This is a very very very long text', 10)
        expect(result).toBe('This is a ...')
    });
})