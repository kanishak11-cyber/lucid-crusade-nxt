pragma solidity >=0.4.25;
contract lusid_crusade
{
    int bal;
    constructor() public
    {
        bal=1;
    }
    function getBalance() view public returns(int)
    {
        return bal;
    }
    function transfer(int amt) public
    {
        bal=bal-amt;
    }
    function add(int amt) public
    {
        bal=bal+amt;
    }
}